# Admin Setup Guide

## ✅ What's Been Updated

### 1. Firebase Authentication Login

- Admin now logs in with Firebase Authentication
- Email: `admin123@gmail.com`
- Password: `Admin@123`

### 2. Improved Admin Dashboard

- **Excel Export**: Download all consultations as CSV/Excel file
- **Clickable Rows**: Click any row to view full details
- **Modal Actions**: View, update status, or delete from modal
- **Compact Design**: Smaller, cleaner table layout
- **Better UX**: Hover effects and smooth transitions

### 3. EmailJS Integration

- Automatic confirmation emails to customers
- Already configured in your `.env` file

---

## 🔥 Firebase Authentication Setup

### Step 1: Enable Email/Password Authentication

1. Go to Firebase Console: https://console.firebase.google.com/project/wbsconsultants-d2801/authentication
2. Click "Get Started" (if not already enabled)
3. Click "Sign-in method" tab
4. Click "Email/Password"
5. Enable it and click "Save"

### Step 2: Create Admin User

1. Go to "Users" tab in Authentication
2. Click "Add User"
3. Enter:
   - **Email**: `admin123@gmail.com`
   - **Password**: `Admin@123`
4. Click "Add User"

That's it! You can now login with these credentials.

---

## 📊 New Admin Dashboard Features

### Excel Export

- Click "Export Excel" button in header
- Downloads CSV file with all consultation data
- Opens in Excel, Google Sheets, etc.
- Filename: `consultations_YYYY-MM-DD.csv`

### Clickable Rows

- Click any row in the table
- Opens detailed modal with all information
- Take actions directly from modal:
  - Mark as Complete
  - Cancel
  - Delete

### Compact Table View

- Smaller rows for better overview
- Shows: Name, Email, Phone, Date, Status
- Hover effect for better UX
- Responsive on all devices

---

## 📧 EmailJS Status

Your EmailJS is already configured:

- ✅ Service ID: `service_hh51qro`
- ✅ Template ID: `template_lui93yk`
- ✅ Public Key: `4JY9QAfXg9eIfDSN4`

### Test Email Sending

1. Go to your website
2. Fill out the consultation form
3. Submit
4. Check the customer's email inbox
5. Should receive confirmation email

### If Emails Not Sending

1. **Check EmailJS Dashboard**: https://dashboard.emailjs.com/
2. **Verify Service is Connected**: Email Services → Check status
3. **Test Template**: Email Templates → Test your template
4. **Check Browser Console**: Look for errors
5. **Verify Template Variables**: Make sure template uses correct variable names

---

## 🎯 How to Use

### Login

1. Go to: http://localhost:5173/admin
2. Enter email: `admin123@gmail.com`
3. Enter password: `Admin@123`
4. Click "Sign In"

### View Consultations

- See all requests in table format
- Use filters: All, Pending, Completed, Cancelled
- View statistics in cards at top

### Take Actions

1. **Click any row** to open details
2. In the modal:
   - View all information
   - Mark as Complete (if pending)
   - Cancel (if pending)
   - Delete (any status)

### Export Data

- Click "Export Excel" button
- File downloads automatically
- Open in Excel or Google Sheets

---

## 🔒 Security Notes

### Current Setup

- Firebase Authentication for admin login
- Firestore security rules allow read/write
- EmailJS public key exposed (normal for client-side)

### For Production

1. **Update Firestore Rules**:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /consultations/{document=**} {
      allow read: if request.auth != null;
      allow write: if true; // Allow public writes for form submissions
    }
  }
}
```

2. **Add Admin Role**:
   - Use Firebase Custom Claims
   - Check if user has admin role
   - Restrict dashboard access

3. **Rate Limiting**:
   - Add Firebase App Check
   - Implement CAPTCHA on forms
   - Monitor EmailJS quota

---

## 🐛 Troubleshooting

### Can't Login

**Problem**: "Invalid email or password"

**Solutions**:

1. Verify user exists in Firebase Authentication
2. Check email is exactly: `admin123@gmail.com`
3. Check password is exactly: `Admin@123`
4. Check Firebase Authentication is enabled
5. Check browser console for errors

### Emails Not Sending

**Problem**: Form submits but no email received

**Solutions**:

1. Check EmailJS dashboard for errors
2. Verify service is connected
3. Test template in EmailJS dashboard
4. Check spam/junk folder
5. Verify template variables match code

### Excel Export Not Working

**Problem**: Nothing happens when clicking Export

**Solutions**:

1. Check browser console for errors
2. Verify consultations data exists
3. Try different browser
4. Check browser allows downloads

### Modal Not Opening

**Problem**: Clicking row doesn't open modal

**Solutions**:

1. Check browser console for errors
2. Verify consultation data is loaded
3. Try refreshing the page
4. Check if modal is behind other elements

---

## ✅ Testing Checklist

### Authentication

- [ ] Can login with admin123@gmail.com
- [ ] Wrong password shows error
- [ ] Logout works
- [ ] Redirects to dashboard after login
- [ ] Can't access dashboard without login

### Dashboard

- [ ] Statistics cards show correct numbers
- [ ] Filters work (All, Pending, Completed, Cancelled)
- [ ] Table shows all consultations
- [ ] Rows are clickable
- [ ] Modal opens with correct data

### Actions

- [ ] Can mark as complete
- [ ] Can cancel
- [ ] Can delete
- [ ] Status updates in real-time
- [ ] Modal closes after action

### Export

- [ ] Excel export button works
- [ ] File downloads
- [ ] File opens in Excel
- [ ] Data is correct

### Emails

- [ ] Form submission works
- [ ] Email received by customer
- [ ] Email has correct data
- [ ] Email looks professional

---

## 📞 Support

### Firebase Issues

- [Firebase Authentication Docs](https://firebase.google.com/docs/auth)
- [Firestore Security Rules](https://firebase.google.com/docs/firestore/security/get-started)

### EmailJS Issues

- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [EmailJS Dashboard](https://dashboard.emailjs.com/)

---

**Status**: ✅ All Features Implemented  
**Login**: admin123@gmail.com / Admin@123  
**Ready for**: Testing & Production

**Last Updated**: April 17, 2026
