# EmailJS Setup Guide

## 📧 Automatic Email Notifications

Your WBS Consultants website now sends automatic confirmation emails to customers when they book a consultation.

---

## 🚀 Quick Setup (5 minutes)

### Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Click "Sign Up" (it's free!)
3. Verify your email address
4. Login to your dashboard

### Step 2: Add Email Service

1. In EmailJS dashboard, click "Email Services"
2. Click "Add New Service"
3. Choose your email provider:
   - **Gmail** (recommended for testing)
   - Outlook
   - Yahoo
   - Custom SMTP
4. Follow the connection wizard
5. Copy your **Service ID** (e.g., `service_abc123`)

### Step 3: Create Email Template

1. Click "Email Templates" in dashboard
2. Click "Create New Template"
3. Use this template:

```
Subject: Consultation Booking Confirmation - WBS Consultants

Hello {{customer_name}},

Thank you for booking a consultation with WBS Consultants!

We have received your request with the following details:

Name: {{customer_name}}
Email: {{customer_email}}
Phone: {{customer_phone}}
Preferred Date: {{preferred_date}}
Type: {{booking_type}}

Message:
{{message}}

Our team will contact you within 24 hours to confirm your consultation appointment.

If you have any questions, feel free to reply to this email or call us at +91 123-456-7890.

Best regards,
WBS Consultants Team

---
Financial Insight. Strategic Advisory. ERP Excellence.
```

4. Save the template
5. Copy your **Template ID** (e.g., `template_xyz789`)

### Step 4: Get Public Key

1. Go to "Account" → "General"
2. Find your **Public Key** (e.g., `abcdefghij1234567`)
3. Copy it

### Step 5: Update .env File

Open `wbs-consultants/.env` and update:

```env
# Firebase Configuration
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
VITE_FIREBASE_APP_ID=your_firebase_app_id

# EmailJS Configuration
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
VITE_EMAILJS_PUBLIC_KEY=abcdefghij1234567
```

### Step 6: Test It!

1. Run your website: `npm run dev`
2. Fill out the consultation form
3. Submit it
4. Check the customer's email inbox
5. You should receive a confirmation email!

---

## 📋 Template Variables

Your email template can use these variables:

| Variable             | Description                 | Example            |
| -------------------- | --------------------------- | ------------------ |
| `{{customer_name}}`  | Customer's full name        | John Doe           |
| `{{customer_email}}` | Customer's email            | john@example.com   |
| `{{customer_phone}}` | Customer's phone            | +91 1234567890     |
| `{{preferred_date}}` | Preferred consultation date | 2024-04-20         |
| `{{message}}`        | Customer's message          | Need help with ERP |
| `{{booking_type}}`   | Type of booking             | Consultation       |
| `{{to_name}}`        | Same as customer_name       | John Doe           |
| `{{to_email}}`       | Same as customer_email      | john@example.com   |

---

## 🎨 Customize Your Email Template

### Add Your Logo

```html
<img
  src="https://your-website.com/logo.png"
  alt="WBS Consultants"
  style="width: 200px;"
/>
```

### Add Styling

```html
<div
  style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;"
>
  <div
    style="background-color: #10b981; color: white; padding: 20px; text-align: center;"
  >
    <h1>WBS Consultants</h1>
  </div>

  <div style="background-color: white; padding: 30px; margin-top: 20px;">
    <h2>Hello {{customer_name}},</h2>
    <p>Thank you for booking a consultation!</p>

    <div style="background-color: #f0f0f0; padding: 15px; margin: 20px 0;">
      <strong>Booking Details:</strong><br />
      Name: {{customer_name}}<br />
      Date: {{preferred_date}}<br />
      Type: {{booking_type}}
    </div>

    <p>We'll contact you within 24 hours.</p>
  </div>

  <div style="text-align: center; padding: 20px; color: #666;">
    <p>WBS Consultants | contact@wbsconsultants.com | +91 123-456-7890</p>
  </div>
</div>
```

---

## 🔧 How It Works

### Workflow

1. **Customer fills form** → Enters name, email, phone, date, message
2. **Form submits** → Data saved to Firebase
3. **Email sends** → EmailJS sends confirmation to customer
4. **Customer receives** → Gets email with booking details
5. **Admin sees** → Request appears in admin dashboard

### Code Flow

```javascript
// In ContactCTA.jsx
const handleSubmit = async (e) => {
  // 1. Save to Firebase
  const result = await addConsultation(formData);

  // 2. Send email to customer
  await sendConsultationEmail(formData);

  // 3. Show success message
  setSubmitted(true);
};
```

---

## 📊 EmailJS Free Tier Limits

- **200 emails/month** - Free forever
- **Unlimited templates**
- **Unlimited services**
- **Email tracking**
- **Auto-reply support**

### Need More?

- **Personal Plan**: $7/month - 1,000 emails
- **Professional Plan**: $15/month - 10,000 emails
- **Enterprise**: Custom pricing

---

## 🐛 Troubleshooting

### Emails Not Sending

**Problem**: Form submits but no email received

**Solutions**:

1. Check `.env` file has correct IDs
2. Verify EmailJS service is connected
3. Check spam/junk folder
4. Test email service in EmailJS dashboard
5. Check browser console for errors

### Wrong Email Content

**Problem**: Email shows wrong information

**Solutions**:

1. Check template variables match exactly
2. Verify template ID is correct
3. Test template in EmailJS dashboard
4. Check formData structure in code

### Service Not Connected

**Problem**: EmailJS says service disconnected

**Solutions**:

1. Reconnect email service in dashboard
2. Check email provider settings
3. Enable "Less secure apps" (Gmail)
4. Use App Password (Gmail 2FA)

---

## 🔒 Security Best Practices

### Protect Your Keys

1. **Never commit .env** to Git (already in .gitignore)
2. **Use environment variables** in production
3. **Rotate keys** if exposed
4. **Limit email quota** to prevent abuse

### Gmail Security

If using Gmail:

1. Enable 2-Factor Authentication
2. Create App Password
3. Use App Password in EmailJS
4. Don't use personal email for production

---

## 📈 Advanced Features

### Send Copy to Admin

Create a second template for admin notifications:

```javascript
// In emailService.js
export const sendAdminNotification = async (data) => {
  const templateParams = {
    to_email: "admin@wbsconsultants.com",
    customer_name: data.name,
    customer_email: data.email,
    customer_phone: data.phone,
    preferred_date: data.preferredDate,
    message: data.message,
  };

  await emailjs.send(
    serviceId,
    "admin_template_id", // Different template
    templateParams,
  );
};
```

### Auto-Reply

Set up auto-reply in EmailJS:

1. Go to Email Templates
2. Enable "Auto-Reply"
3. Configure reply template
4. Save

### Email Tracking

Track email opens:

1. Go to Email History in dashboard
2. See delivery status
3. Check open rates
4. Monitor bounces

---

## 🎯 Testing Checklist

### Before Going Live

- [ ] EmailJS account created
- [ ] Email service connected
- [ ] Template created and tested
- [ ] .env file updated
- [ ] Test email sent successfully
- [ ] Email received in inbox
- [ ] Template variables display correctly
- [ ] Styling looks good
- [ ] Links work (if any)
- [ ] Mobile view tested
- [ ] Spam folder checked

### Production Checklist

- [ ] Use professional email (not Gmail)
- [ ] Custom domain email preferred
- [ ] Template has company branding
- [ ] Contact information correct
- [ ] Legal disclaimers added
- [ ] Unsubscribe link (if needed)
- [ ] Privacy policy link
- [ ] Monitor email quota

---

## 📞 Support

### EmailJS Support

- [Documentation](https://www.emailjs.com/docs/)
- [FAQ](https://www.emailjs.com/docs/faq/)
- [Support Email](mailto:support@emailjs.com)

### Common Issues

1. **Gmail blocking**: Use App Password
2. **Quota exceeded**: Upgrade plan
3. **Template errors**: Check variable names
4. **Service disconnected**: Reconnect in dashboard

---

## ✅ Quick Reference

### Environment Variables

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### Template Variables

```
{{customer_name}}
{{customer_email}}
{{customer_phone}}
{{preferred_date}}
{{message}}
{{booking_type}}
```

### Test Email

```javascript
// In browser console
await sendConsultationEmail({
  name: "Test User",
  email: "test@example.com",
  phone: "+91 1234567890",
  preferredDate: "2024-04-20",
  message: "Test message",
});
```

---

**Status**: ✅ EmailJS Integration Complete  
**Emails**: Automatic confirmation to customers  
**Storage**: Firebase for data persistence  
**Admin**: Dashboard to manage requests

**Last Updated**: April 17, 2026
