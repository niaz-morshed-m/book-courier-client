BookCourier – Library-to-Home Delivery System

# Project Overview

BookCourier is a full-stack web application that allows users to borrow books from libraries and get them delivered to their doorstep. The platform bridges the gap between libraries and readers by offering a seamless online book ordering, tracking, and management system.

It is designed for students, researchers, and book lovers who want easy access to library books without physically visiting the library.


# Project Purpose

Enable users to request library books online

Simplify book management for librarians

Provide order tracking, payment, and delivery status updates

Implement role-based dashboards (User, Librarian, Admin)

Ensure a modern, responsive, and secure web experience


# Live Website

Live Site: https://book-courier.netlify.app/


# Key Features


🔐 Authentication

Email & password login

Social login support

Secure Firebase authentication

Role-based protected routes using JWT


🏠 Home Page

Banner with 3+ sliders showcasing books

Latest Books section (recent additions)

Delivery coverage map using Leaflet

“Why Choose BookCourier” section

Animated and extra custom sections


📖 Books Management

View all published books in a card layout

Search books by name

Sort books by price

Book details page with order modal

Wishlist and review/rating system


🛒 Orders & Payments

Place book orders with address and contact info

Order status: Pending → Shipped → Delivered

Online payment system

Invoice history for completed payments


📊 Dashboards


$ User Dashboard

My Orders (Cancel / Pay)

My Wishlist

My Profile

Invoices

$Librarian Dashboard

Add Book

My Books (Edit / Publish / Unpublish)

Manage Orders (Status updates)

$Admin Dashboard

All Users (Role management)

Manage Books (Publish / Delete)

Profile management.


# NPM Packages Used:

@tanstack/react-query – Data fetching, caching, and revalidation

aos – Scroll-based animations

axios – API request handling

leaflet – Interactive map for delivery coverage

react-hook-form – Form handling and validation

react-icons – Icon library

react-leaflet – React bindings for Leaflet maps

react-responsive-carousel – Banner and slider components

react-router – Client-side routing

recharts – Charts and dashboard visualizations

sweetalert2 – Alert and confirmation dialogs



🛠️ Technologies Used

Frontend: React, Tailwind CSS

Backend: Node.js, Express.js

Database: MongoDB

Authentication: Firebase Auth

State & Data Fetching: TanStack Query

Maps: Leaflet & React-Leaflet

Charts: Recharts

Alerts & UI: SweetAlert2, AOS animations


# Security

Firebase & MongoDB credentials secured via environment variables

JWT token verification for protected server routes

Role-based access control


# Responsive Design

Fully responsive for mobile, tablet, and desktop

Clean layout, balanced spacing, and consistent UI

Light/Dark mode support


# Deployment

Client deployed on: [Netlify / Vercel]

Server deployed on: [Render / Vercel / Railway]

Firebase domain authorization configured

No reload errors on protected routes


# Repositories

Client Repo: https://github.com/niaz-morshed-m/book-courier-client

Server Repo: https://github.com/niaz-morshed-m/book-courier-server


# Optional Features

Wishlist system

Book review & rating

Skeleton loaders

Cached data fetching

Dark/Light theme toggle