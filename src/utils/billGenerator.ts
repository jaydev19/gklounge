import jsPDF from 'jspdf';
import { CartItem } from '../App';

interface BillData {
  orderId: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  appointmentDate: string;
  appointmentTime: string;
  items: CartItem[];
  totalAmount: number;
  paymentMethod: string;
  notes?: string;
}

export const generateBill = (data: BillData) => {
  const doc = new jsPDF();
  
  // Header
  doc.setFontSize(24);
  doc.setTextColor(147, 51, 234); // Purple color
  doc.text('GK LOUNGE', 20, 30);
  
  doc.setFontSize(12);
  doc.setTextColor(0, 0, 0);
  doc.text('Beauty Salon & Academy', 20, 40);
  doc.text('Chaibasa, Jharkhand, India', 20, 48);
  doc.text('Phone: +91 9234567890', 20, 56);
  
  // Bill title
  doc.setFontSize(18);
  doc.setTextColor(147, 51, 234);
  doc.text('APPOINTMENT BILL', 20, 80);
  
  // Order details
  doc.setFontSize(12);
  doc.setTextColor(0, 0, 0);
  doc.text(`Order ID: ${data.orderId}`, 20, 95);
  doc.text(`Date: ${new Date().toLocaleDateString()}`, 20, 105);
  doc.text(`Payment Method: ${data.paymentMethod}`, 20, 115);
  
  // Customer details
  doc.setFontSize(14);
  doc.setTextColor(147, 51, 234);
  doc.text('CUSTOMER DETAILS', 20, 135);
  
  doc.setFontSize(12);
  doc.setTextColor(0, 0, 0);
  doc.text(`Name: ${data.customerName}`, 20, 150);
  doc.text(`Email: ${data.customerEmail}`, 20, 160);
  doc.text(`Phone: ${data.customerPhone}`, 20, 170);
  doc.text(`Appointment Date: ${data.appointmentDate}`, 20, 180);
  doc.text(`Appointment Time: ${data.appointmentTime}`, 20, 190);
  
  // Services table header
  doc.setFontSize(14);
  doc.setTextColor(147, 51, 234);
  doc.text('SERVICES BOOKED', 20, 210);
  
  // Table headers
  doc.setFontSize(10);
  doc.setTextColor(0, 0, 0);
  doc.text('Service', 20, 225);
  doc.text('Qty', 120, 225);
  doc.text('Price', 140, 225);
  doc.text('Total', 170, 225);
  
  // Draw line under headers
  doc.line(20, 228, 190, 228);
  
  // Services list
  let yPosition = 240;
  data.items.forEach((item, index) => {
    doc.text(item.service.name, 20, yPosition);
    doc.text(item.quantity.toString(), 120, yPosition);
    doc.text(`₹${item.service.price}`, 140, yPosition);
    doc.text(`₹${(item.service.price * item.quantity).toFixed(2)}`, 170, yPosition);
    yPosition += 12;
  });
  
  // Total line
  doc.line(20, yPosition, 190, yPosition);
  yPosition += 10;
  
  doc.setFontSize(14);
  doc.setTextColor(147, 51, 234);
  doc.text(`TOTAL AMOUNT: ₹${data.totalAmount.toFixed(2)}`, 20, yPosition);
  
  // Notes if any
  if (data.notes) {
    yPosition += 20;
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.text('Special Notes:', 20, yPosition);
    yPosition += 10;
    doc.text(data.notes, 20, yPosition);
  }
  
  // Footer
  yPosition += 30;
  doc.setFontSize(10);
  doc.setTextColor(100, 100, 100);
  doc.text('Thank you for choosing GK Lounge!', 20, yPosition);
  doc.text('We look forward to serving you.', 20, yPosition + 10);
  
  // Save the PDF
  doc.save(`GK-Lounge-Bill-${data.orderId}.pdf`);
};