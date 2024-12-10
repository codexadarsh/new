// App.js
import React from 'react';
import BillDetails from './Component/BillDetails';
import ItemList from './Component/ItemList';
import TotalAmount from './Component/TotalAmount';
import { jsPDF } from 'jspdf';
import './App.css';
import Navbar from './Component/Navbar';
import Hero from './Component/Hero';

function App() {
    const [items, setItems] = React.useState([]);

    const handleAddItem = (item) => {
        setItems([...items, item]);
    };

    const handleDeleteItem = (index) => {
        const updatedItems = [...items];
        updatedItems.splice(index, 1);
        setItems(updatedItems);
    };

    const calculateTotalAmount = () => {
        return items.reduce(
            (total, item) =>
                total +
                item.quantity *
                item.price, 0);
    };

    const handleDownloadPDF = () => {
        const pdf = new jsPDF();
        pdf.text('Invoice', 20, 20);

        // Add items to PDF
        items.forEach((item, index) => {
            const yPos = 30 + index * 10;
            pdf.text(
                `Item: ${item.item}, 
                    Quantity: ${item.quantity}, 
                    Price: ${item.price}`, 20, yPos);
        });

        // Add total amount to PDF
        const totalAmount =
            calculateTotalAmount();
        pdf.text(
            `Total Amount: 
                    $${totalAmount.toFixed(2)}`, 20, 180);

        // Save the PDF
        pdf.save('invoice.pdf');
    };
    const handleShowApp = () => {
        document.querySelector('.home').style.display = 'none';
        document.querySelector('.App').style.display = 'block';
    };
    const handleShowHome = () => {
        document.querySelector('.home').style.display = 'block';
        document.querySelector('.App').style.display = 'none';
    };
    return (
        <><div className='home'>
            <Navbar />
            <Hero />
            <button className='btn' onClick={handleShowApp}>Get Started</button>
        </div>
        <div className="App">
                <h1>Bill/Invoice Generator</h1>
                <BillDetails onAddItem={handleAddItem} />
                <ItemList items={items}
                    onDeleteItem={handleDeleteItem} />
                <TotalAmount
                    total={calculateTotalAmount()} />
                <button
                    onClick={handleDownloadPDF}>Download PDF</button>
                <button className='btn'
                onClick={handleShowHome}>Home</button>
            </div>
            </>
    );
}

export default App;