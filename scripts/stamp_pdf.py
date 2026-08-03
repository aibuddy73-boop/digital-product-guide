#!/usr/bin/env python3
"""
PDF Stamping Script - Adds buyer information watermark to protect against sharing
Usage: python stamp_pdf.py input.pdf output.pdf "Buyer Name" "buyer@email.com" "ORDER123"
"""

import sys
from pypdf import PdfReader, PdfWriter
from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import letter
from io import BytesIO

def create_watermark(name, email, order_ref):
    """Create a watermark PDF with buyer information"""
    packet = BytesIO()
    can = canvas.Canvas(packet, pagesize=letter)
    can.setFont("Helvetica", 8)
    can.setFillColorRGB(0.7, 0.7, 0.7)  # Light gray
    
    # Watermark text at bottom of page
    watermark_text = f"Licensed to {name} ({email}) - Order {order_ref} - Do Not Redistribute"
    can.drawCentredString(300, 20, watermark_text)
    can.save()
    
    packet.seek(0)
    return PdfReader(packet)

def stamp_pdf(input_path, output_path, name, email, order_ref):
    """Apply watermark to all pages of the PDF"""
    reader = PdfReader(input_path)
    writer = PdfWriter()
    
    # Create watermark
    watermark = create_watermark(name, email, order_ref)
    watermark_page = watermark.pages[0]
    
    # Apply watermark to each page
    for page in reader.pages:
        page.merge_page(watermark_page)
        writer.add_page(page)
    
    # Add basic protection (prevents casual editing)
    writer.encrypt(user_password="", owner_password="", permissions_flag=0b0100)
    
    # Write output
    with open(output_path, "wb") as output_file:
        writer.write(output_file)
    
    print(f"✅ Stamped PDF created: {output_path}")
    print(f"   Licensed to: {name} ({email})")
    print(f"   Order: {order_ref}")

if __name__ == "__main__":
    if len(sys.argv) != 6:
        print("Usage: python stamp_pdf.py input.pdf output.pdf 'Name' 'email' 'order_ref'")
        print("Example: python stamp_pdf.py guide.pdf guide-stamped.pdf 'John Doe' 'john@email.com' 'ORDER123'")
        sys.exit(1)
    
    input_pdf = sys.argv[1]
    output_pdf = sys.argv[2]
    buyer_name = sys.argv[3]
    buyer_email = sys.argv[4]
    order_ref = sys.argv[5]
    
    stamp_pdf(input_pdf, output_pdf, buyer_name, buyer_email, order_ref)
