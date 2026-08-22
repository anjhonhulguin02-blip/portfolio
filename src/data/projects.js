import motorentPreview from '../assets/motorent-preview.jpg';
import norzamartPreview from '../assets/norzamart-preview.jpg';
import scholarshipPreview from '../assets/scholarship-preview.jpg';

export const projects = [
  {
    id: "motorent",
    title: "MotoRent",
    subtitle: "Motorcycle Rental & Booking Web Application",
    image: motorentPreview,
    status: "Live",
    description:
      "A responsive full-stack motorcycle rental platform supporting vehicle discovery, online booking, Supabase authentication, and database-driven downpayment and balance tracking.",
    stack: ["React.js", "Supabase", "PostgreSQL", "Row-Level Security", "Vercel"],
    githubUrl: "https://github.com/anjhonhulguin02-blip/motorent",
    liveUrl: "https://motorent-xi.vercel.app/",
    caseStudy: {
      overview:
        "MotoRent is a full-stack motorcycle rental and booking platform built with React and Supabase. Customers browse available units, book a rental, upload a valid ID, and track their downpayment and remaining balance in real time, while an admin dashboard manages the entire booking lifecycle and fleet.",
      problem:
        "Small motorcycle rental operators typically manage bookings, payments, and ID verification manually across chat apps and spreadsheets, which makes it easy to lose track of who owes what, which units are available, and which renters are verified.",
      solution:
        "I built a single web app where renters browse the live fleet, book a unit, and pay a downpayment, while every booking's financial state (downpayment paid, balance due, late fees, extensions) is computed from and stored back to a Supabase/PostgreSQL database that an admin can review and act on from a dedicated dashboard.",
      role:
        "Solo developer — designed the database schema and RLS policies, and built both the customer-facing app and the admin dashboard.",
      techStack: ["React.js", "Supabase Auth", "PostgreSQL", "Row-Level Security", "Supabase Storage", "Vercel"],
      architecture: [
        "User / Browser",
        "React Frontend (Vite)",
        "Supabase (Auth · PostgreSQL · Storage)",
      ],
      features: [
        "Responsive motorcycle browsing with live availability status per unit",
        "Booking workflow with downpayment options (full, 50%, or custom amount) and automatic remaining-balance calculation",
        "Supabase email/password authentication with Row-Level Security policies so each client can only see their own bookings",
        "Government ID / driver's license upload to private storage, reviewed by admin via signed URLs before dispatch",
        "Admin dashboard to approve, reject, and complete bookings, confirm manual cash/GCash payments, and auto-calculate late-return penalties",
        "Fleet manager (admin) for adding, editing, and pricing motorcycles and toggling availability",
        "Lease extension flow that recalculates fees from live fleet rates and tracks extension payment status",
        "Client reviews (rating + comment) on completed rentals",
      ],
      challenges: [
        {
          problem:
            "An initial pass at Row-Level Security locked down the bookings and client tables, but a follow-up audit found that Supabase Storage buckets (ID uploads, receipts) were still publicly listable.",
          solution:
            "I wrote a second, more targeted set of storage policies restricting object access to the owning client and admins, verified with direct policy tests before rolling it out.",
        },
        {
          problem:
            "Downpayment, balance, and late-fee amounts needed to stay consistent whether they were calculated on the booking form, the customer dashboard, or the admin dashboard.",
          solution:
            "Centralized the payment math around stored fields on each booking (amount paid, balance due, extension amount) so every view reads the same source of truth instead of recomputing totals independently.",
        },
      ],
      learned:
        "Building the RLS lockdown in two passes taught me to treat database security as something to audit end-to-end (tables *and* storage buckets), not something that's 'done' after the first policy is written.",
      future: [
        "Replace the manual GCash/Maya screenshot upload with a real payment gateway (e.g. PayMongo)",
        "Add an admin analytics view (revenue, unit utilization)",
        "Finish the bilingual (Tagalog/English) interface toggle",
      ],
    },
  },
  {
    id: "norzamart",
    title: "NorzaMart",
    subtitle: "E-Commerce Marketplace",
    image: norzamartPreview,
    status: "Core Complete — Payments Pending",
    description:
      "A full-stack e-commerce marketplace with buyer, seller, and admin roles, supporting product discovery, multi-seller checkout, buyer-seller chat, and coupon-based discounts.",
    stack: ["Next.js", "React", "TypeScript", "MongoDB", "NextAuth.js", "Cloudinary", "Tailwind CSS"],
    githubUrl: "https://github.com/anjhonhulguin02-blip/norzamart",
    liveUrl: "https://norzamart.vercel.app",
    caseStudy: {
      overview:
        "NorzaMart is a multi-role e-commerce marketplace built with the Next.js App Router and MongoDB — buyers shop and message sellers, sellers manage their own product catalog and orders, and admins moderate sellers, products, coupons, and payouts.",
      problem:
        "Most student e-commerce projects stop at a product list and a cart. I wanted to build the parts that make a marketplace actually function as a marketplace: multiple independent sellers, real inventory decrements, direct buyer-seller communication, and an admin layer to moderate all of it.",
      solution:
        "I built NorzaMart around three roles sharing one MongoDB database: buyers browse and check out (with coupon support), sellers manage their own products, orders, and payout requests, and admins approve sellers, review payouts, and moderate the catalog — all behind NextAuth credentials authentication.",
      role:
        "Solo developer, actively building — architecture, data models, authentication, and all three role dashboards.",
      techStack: [
        "Next.js (App Router)",
        "TypeScript",
        "Next.js API Routes",
        "MongoDB Atlas",
        "Mongoose",
        "NextAuth.js (Credentials + JWT sessions)",
        "bcryptjs",
        "Cloudinary",
        "Tailwind CSS",
        "Framer Motion",
      ],
      architecture: [
        "React / Next.js Frontend (App Router)",
        "Next.js API Routes",
        "MongoDB Atlas (Mongoose models) + Cloudinary (media)",
      ],
      features: [
        "Credentials-based authentication with bcrypt password hashing and JWT sessions via NextAuth",
        "Multi-seller checkout that splits a single cart into per-seller orders, decrements product stock, and applies coupon discounts proportionally across sellers",
        "Real-time-style buyer-seller chat stored in MongoDB, with per-conversation unread counts and read receipts",
        "Coupon system with expiry, usage-limit, minimum-spend, and max-discount validation",
        "Product review system with like/unlike toggling",
        "Seller dashboard for product CRUD, order fulfillment, and payout requests",
        "Admin dashboard for approving sellers, moderating products, managing coupons and categories, and reviewing payout requests",
      ],
      challenges: [
        {
          problem:
            "A single cart can contain products from multiple sellers, but each seller needs their own order record, and a coupon discount applied at checkout has to be split fairly across those orders.",
          solution:
            "The checkout API groups cart items by seller into separate order documents, then distributes the coupon discount proportionally by each seller's subtotal, assigning any rounding remainder to the last group so the totals always reconcile.",
        },
      ],
      learned:
        "Designing the checkout logic around multiple independent sellers made clear how much more state a real marketplace has to track compared to a single-vendor store — inventory, payouts, and messaging all had to be modeled per seller, not globally.",
      future: [
        "Integrate a real payment gateway (currently cash-on-delivery / manual payment only — the app itself marks online payment as \"coming soon\")",
        "Automate seller payouts (currently admin-approved internal records, not real fund transfers)",
        "Add seller-facing analytics",
      ],
    },
  },
  {
    id: "scholarship",
    title: "Scholarship Distribution System",
    subtitle: "Deployment & Environment Work — Capstone Project",
    image: scholarshipPreview,
    status: "Academic Demo",
    description:
      "A Laravel scholarship management system from our university capstone. I handled the environment engineering and took it from a codebase that only ran locally to a live, publicly reachable deployment.",
    stack: ["Laravel", "PHP", "MySQL", "Railway", "Composer"],
    githubUrl: "https://github.com/anjhonhulguin02-blip/Scholarship-Distribution-System",
    liveUrl: "https://scholarship-app-production.up.railway.app",
    caseStudy: {
      overview:
        "A two-role Laravel application where students apply for scholarships and organizations review applications, approve them, and track fund disbursement. This was our university capstone submission. I am including it for the deployment and environment engineering I did on it — see 'My role' for exactly what was mine.",
      problem:
        "The codebase would only run on one machine. Before it could be demonstrated — let alone hosted anywhere — it had to be reproducible from a fresh checkout, and then survive a real build on a real server.",
      solution:
        "I made it actually runnable: resolved the PHP extension and dependency requirements, got it running reliably in local development, then deployed it to Railway with a managed MySQL database so it could be reached from a public URL.",
      role:
        "Deployment and environment engineering (not application development). What I did: diagnosed and enabled the required PHP extensions (zip, gd, exif, pdo_mysql), managed Composer and NPM dependencies, configured local file storage and server startup, and handled the production deployment to Railway — provisioning MySQL, importing the schema, wiring environment variables, and debugging the build failures that surfaced along the way.",
      techStack: ["Laravel 10", "PHP 8.2", "MySQL", "Railway", "Composer", "NPM"],
      architecture: [
        "Student / Organization Browser",
        "Laravel on Railway",
        "Managed MySQL (Railway)",
      ],
      features: [
        "What the system does: students apply for scholarships with required document uploads, with duplicate-application prevention and slot-availability checks",
        "Organizations review applications, approve or reject them, and view full applicant details",
        "Notifications for both students and organizations on application and disbursement events",
        "A transaction/disbursement module that records fund releases against an internal balance, including an Ethereum-based ledger",
        "Note: the application features above are not my code — see 'My role' for my contribution",
      ],
      challenges: [
        {
          problem:
            "The delivered codebase would not install at all: Composer failed because the PHP build was missing the zip extension, and later the app refused to boot without gd, exif, and pdo_mysql — none of which is obvious from the error messages alone.",
          solution:
            "Traced each failure back to the specific missing extension, enabled them in php.ini, and re-ran the dependency install until the project bootstrapped cleanly from a fresh checkout.",
        },
        {
          problem:
            "The first Railway deployment failed during the build. Laravel threw 'Invalid URI' while discovering packages, because APP_URL had been pointed at a Railway domain variable that is not yet resolved at build time.",
          solution:
            "Read the build log back to the failing artisan step, set APP_URL to a valid value so the build could complete, then generated the public domain and set the real URL for runtime. Also caught a credentials mismatch — the app's .env expected a MySQL password the local server did not have — and corrected it before importing the schema.",
        },
      ],
      learned:
        "Taking someone else's codebase from 'works on their machine' to a public URL taught me more about deployment than writing the app would have: reading build logs to find the actual failing step, recognising that missing PHP extensions surface as unrelated-looking errors, and understanding which environment variables must resolve at build time versus runtime.",
      future: [
        "Add a documented .env.example and setup script so the environment is reproducible without manual trial and error",
        "Move authentication onto Laravel's built-in Auth facade instead of the custom session implementation",
      ],
    },
  },
];
