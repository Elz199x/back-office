export const permissions = [
  // Product Management
  { name: 'product.view', description: 'ดูรายการสินค้า', group: 'PRODUCT', default: true },
  { name: 'product.create', description: 'เพิ่มสินค้าใหม่', group: 'PRODUCT', default: false },
  { name: 'product.update', description: 'แก้ไขข้อมูลสินค้า', group: 'PRODUCT', default: false },
  { name: 'product.delete', description: 'ลบสินค้า', group: 'PRODUCT', default: false },
  { name: 'product.manage_stock', description: 'จัดการสต็อกสินค้า', group: 'PRODUCT', default: false },
  { name: 'category.manage', description: 'จัดการหมวดหมู่สินค้า', group: 'PRODUCT', default: false },
  { name: 'attribute.manage', description: 'จัดการแอตทริบิวต์สินค้า', group: 'PRODUCT', default: false },

  // Inventory Management
  { name: 'inventory.view', description: 'ดูสถานะสินค้าคงคลัง', group: 'PRODUCT', default: true },
  { name: 'inventory.update', description: 'อัปเดตข้อมูลสินค้าคงคลัง', group: 'PRODUCT', default: false },
  { name: 'inventory.alert', description: 'กำหนดการแจ้งเตือนเมื่อสินค้าคงคลังต่ำ', group: 'PRODUCT', default: false },

  // Order Management
  { name: 'order.view', description: 'ดูคำสั่งซื้อ', group: 'ORDER', default: true },
  { name: 'order.update_status', description: 'อัปเดตสถานะคำสั่งซื้อ', group: 'ORDER', default: false },
  { name: 'order.assign_tracking', description: 'กำหนดเลขติดตามพัสดุ', group: 'ORDER', default: false },
  { name: 'order.refund', description: 'คืนเงินคำสั่งซื้อ', group: 'ORDER', default: false },
  { name: 'order.print_invoice', description: 'พิมพ์ใบแจ้งหนี้', group: 'ORDER', default: false },

  // Discount & Pricing Management
  { name: 'discount.create', description: 'สร้างส่วนลด', group: 'MARKETING', default: false },
  { name: 'discount.manage', description: 'จัดการส่วนลด', group: 'MARKETING', default: false },
  { name: 'pricing.update', description: 'อัปเดตราคาสินค้า', group: 'PRODUCT', default: false },
  { name: 'pricing.promotion', description: 'ตั้งโปรโมชั่นส่วนลดตามช่วงเวลา', group: 'PRODUCT', default: false },

  // Marketing & Promotion
  { name: 'coupon.manage', description: 'จัดการโค้ดส่วนลด', group: 'MARKETING', default: false },
  { name: 'campaign.manage', description: 'จัดการแคมเปญโปรโมชั่น', group: 'MARKETING', default: false },
  { name: 'email.send', description: 'ส่งอีเมลการตลาด', group: 'MARKETING', default: false },

  // Multi-Language Support
  { name: 'language.manage', description: 'จัดการการแปลภาษาในระบบ', group: 'SYSTEM', default: false },
  { name: 'translation.create', description: 'เพิ่มข้อความแปลในระบบ', group: 'SYSTEM', default: false },
  { name: 'translation.update', description: 'อัปเดตข้อความแปล', group: 'SYSTEM', default: false },

  // User Management
  { name: 'user.create', description: 'สร้างผู้ใช้ใหม่', group: 'SYSTEM', default: false },
  { name: 'user.update', description: 'อัปเดตข้อมูลผู้ใช้', group: 'SYSTEM', default: false },
  { name: 'user.delete', description: 'ลบผู้ใช้', group: 'SYSTEM', default: false },
  { name: 'user.view', description: 'ดูข้อมูลผู้ใช้', group: 'SYSTEM', default: true },
  { name: 'user.assign_role', description: 'มอบหมายบทบาทให้ผู้ใช้', group: 'SYSTEM', default: false },
  { name: 'user.change_password', description: 'เปลี่ยนรหัสผ่านของผู้ใช้', group: 'SYSTEM', default: false },

  // Content Management
  { name: 'content.create', description: 'สร้างบล็อกโพสต์', group: 'SYSTEM', default: false },
  { name: 'content.update', description: 'อัปเดตบล็อกโพสต์', group: 'SYSTEM', default: false },
  { name: 'content.delete', description: 'ลบบล็อกโพสต์', group: 'SYSTEM', default: false },
  { name: 'content.view', description: 'ดูบล็อกโพสต์', group: 'SYSTEM', default: true },

  // Audit Log Management
  { name: 'auditlog.view', description: 'ดูประวัติการใช้งานระบบ', group: 'SYSTEM', default: true },
  { name: 'auditlog.delete', description: 'ลบประวัติการใช้งานระบบ', group: 'SYSTEM', default: false },

  // Promotion Management
  { name: 'promotion.create', description: 'สร้างโปรโมชั่น', group: 'MARKETING', default: false },
  { name: 'promotion.manage', description: 'จัดการโปรโมชั่น', group: 'MARKETING', default: false },
  { name: 'promotion.apply', description: 'ใช้โปรโมชั่นกับคำสั่งซื้อ', group: 'MARKETING', default: false },

  // Payment Management
  { name: 'payment.view', description: 'ดูสถานะการชำระเงิน', group: 'PAYMENT', default: false },
  { name: 'payment.approve_transfer', description: 'อนุมัติการโอนเงิน', group: 'PAYMENT', default: false },
  { name: 'payment.channel_config', description: 'จัดการช่องทางการชำระเงิน', group: 'PAYMENT', default: false },

  // Shipping Management
  { name: 'shipping.config', description: 'ตั้งค่าการขนส่ง', group: 'SHIPPING', default: false },
  { name: 'shipping.provider_manage', description: 'จัดการผู้ให้บริการขนส่ง', group: 'SHIPPING', default: false },
  { name: 'shipping.track', description: 'ตรวจสอบสถานะพัสดุ', group: 'SHIPPING', default: true },

  // Reports & Analytics
  { name: 'report.sales', description: 'ดูรายงานยอดขาย', group: 'REPORT', default: false },
  { name: 'report.orders', description: 'ดูรายงานคำสั่งซื้อ', group: 'REPORT', default: false },
  { name: 'report.inventory', description: 'ดูรายงานสินค้าคงเหลือ', group: 'REPORT', default: false },
  { name: 'report.customer', description: 'ดูรายงานข้อมูลลูกค้า', group: 'REPORT', default: false },

  // Admin & System
  { name: 'admin.manage', description: 'จัดการบัญชีผู้ดูแลระบบ', group: 'SYSTEM', default: false },
  { name: 'admin.set_permission', description: 'กำหนดสิทธิ์ผู้ดูแล', group: 'SYSTEM', default: false },
  { name: 'auditlog.view', description: 'ดูประวัติการใช้งานระบบ', group: 'SYSTEM', default: true },
];
