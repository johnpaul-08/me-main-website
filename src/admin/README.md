# Admin Dashboard Documentation

## Overview

The admin dashboard provides a comprehensive interface for managing:
- **Events** - Create, edit, and delete events
- **Photo Gallery** - Upload and manage photos
- **Mentors** - Manage mentor profiles
- **Testimonials** - Manage testimonials
- **Newsletter** - Send newsletters to subscribers
- **Settings** - Configure general settings

## Components

### Main Components
- **AdminRouter.jsx** - Main router handling all admin pages and authentication
- **AdminDashboard.jsx** - Dashboard homepage with quick access to main features
- **AdminLogin.jsx** - Login page for authentication
- **ProtectedAdminRoute.jsx** - Route protection component
- **AdminHeader.jsx** - Header navigation
- **AdminSidebar.jsx** - Sidebar navigation menu

### Feature Components
- **AdminEvents.jsx** - Event management
- **AdminGallery.jsx** - Gallery management
- **AdminMentors.jsx** - Mentor management
- **AdminTestimonials.jsx** - Testimonial management
- **AdminNewsletter.jsx** - Newsletter management
- **AdminSettings.jsx** - Settings management

## Integration

To integrate the admin dashboard into your main app:

### 1. Update App.jsx or main routing file

```jsx
import AdminRouter from './admin/AdminRouter';

// In your routing setup, add:
if (window.location.hash === '#/admin' || window.location.hash.startsWith('#/admin/')) {
  return <AdminRouter />;
}
```

### 2. Add link to admin panel (optional)

Add a link in your Navbar or footer to access the admin panel:

```jsx
<a href="#/admin" className="...">Admin Dashboard</a>
```

## Authentication

The admin dashboard uses localStorage for token storage. Default credentials:
- **Username:** admin
- **Password:** admin123

**⚠️ Important:** Change the default credentials in `AdminLogin.jsx` for production!

### Production Implementation

For production, replace the hardcoded credentials with:
- Backend API authentication
- JWT tokens
- Proper session management
- Secure password hashing

## Features

### Dashboard
- Welcome message
- Upcoming events overview
- Quick action buttons for all management sections

### Events Management
- Add new events with title, date, location, description
- Edit existing events
- Delete events
- View event list

### Photo Gallery
- Upload photos with titles
- Manage photos in grid view
- Edit and delete photos
- Image preview with fallback

### Mentor Management
- Add mentor profiles with name, title, email, image
- View mentors in table format
- Edit and delete mentor profiles

### Testimonials Management
- Add testimonials with author name, content, rating
- Rate testimonials (1-5 stars)
- View testimonials with date
- Edit and delete testimonials

### Newsletter Management
- Send newsletters with subject and content
- View newsletter history
- Track subscriber count
- Edit and delete newsletters

### Settings
- Configure site name and description
- Set admin email
- Toggle maintenance mode
- Enable/disable features
- Change admin password
- Save settings to localStorage

## Styling

The dashboard uses **Tailwind CSS** for styling. All components are responsive and mobile-friendly.

### Color Scheme
- Primary: Amber (#B45309)
- Background: Gray (#F3F4F6)
- Text: Dark Gray (#111827)

## Icons

The dashboard uses **react-icons/fa** (Font Awesome) for icons. Icons included:
- `FaCalendarAlt` - Events
- `FaImages` - Gallery
- `FaUsers` - Mentors
- `FaHeart` - Testimonials
- `FaFileAlt` - Newsletter
- `FaCog` - Settings
- And more...

## Data Storage

Currently, the dashboard uses **localStorage** for data storage. For production:
1. Connect to a backend API
2. Implement proper database
3. Add authentication with JWT
4. Add error handling and validation
5. Implement pagination for large datasets

## Responsive Design

The dashboard is fully responsive:
- **Mobile:** Collapsible sidebar, stack layout
- **Tablet:** Responsive grid, optimized spacing
- **Desktop:** Full sidebar, multi-column layouts

## Navigation

Navigation uses hash-based routing:
- `/admin` - Dashboard
- `/admin/events` - Events management
- `/admin/gallery` - Gallery management
- `/admin/mentors` - Mentor management
- `/admin/testimonials` - Testimonial management
- `/admin/newsletter` - Newsletter management
- `/admin/settings` - Settings

## Future Enhancements

- [ ] Backend API integration
- [ ] Real database support
- [ ] Advanced authentication
- [ ] User management
- [ ] Analytics dashboard
- [ ] Export data functionality
- [ ] Import bulk data
- [ ] Scheduled tasks
- [ ] Email notifications
- [ ] File upload to cloud storage

## Troubleshooting

### Login not working
- Clear localStorage and try again
- Check browser console for errors
- Ensure credentials are correct (default: admin/admin123)

### Changes not persisting
- Currently uses localStorage (not persistent across devices)
- Implement backend API for real persistence

### Styling issues
- Ensure Tailwind CSS is properly configured
- Check for conflicting CSS rules

## Support

For issues or questions, contact the development team.

---

**Version:** 1.0.0  
**Last Updated:** January 2024
