# 📚 Book Vibe

A React-based book library app where users can browse books, view details, and manage their personal **Read List** and **Wishlist** — with data persisted across sessions using localStorage.

---

## 🔗 Live Demo

[book-vibe.netlify.app](#) <!-- replace with your actual URL -->

---

## ✨ Features

- Browse a curated collection of books
- View full book details — rating, pages, publisher, review, tags
- Add books to a **Read List** or **Wishlist**
- Duplicate prevention — a book can't exist in both lists
- Sort books by **rating**, **total pages**, or **published year**
- Pages-per-book **spike chart** visualization
- Persistent lists using **localStorage** — survives page refresh
- Fully responsive — mobile, tablet, desktop
- Toast notifications for all user actions

---

## 🛠️ Tech Stack

| Tech | Purpose |
|---|---|
| React 19 + Vite | UI framework and build tool |
| React Router v7 | Client-side routing with loaders |
| Tailwind CSS | Utility-first styling |
| DaisyUI | Component library on top of Tailwind |
| React Context API | Global state — no prop drilling |
| react-hot-toast | Toast notifications |
| react-tabs | Tabbed UI on the Listed Books page |
| Recharts | Custom spike chart visualization |
| localStorage | Persistent read/wishlist across sessions |

---

## 📁 Project Structure

```
src/
├── assets/
├── components/
│   ├── Navbar.jsx          # Responsive nav with active NavLinks
│   ├── Banner.jsx          # Hero section
│   ├── AllBooks.jsx        # Book grid with sort controls
│   ├── BookCard.jsx        # Individual book card with link
│   ├── PagesChart.jsx      # Recharts spike chart
│   ├── ReadBookCard.jsx    # Card for read list tab
│   └── WishlistBookCard.jsx
├── context/
│   └── BooksContext.jsx    # Global state + localStorage sync
├── layouts/
│   └── MainLayout.jsx      # Navbar + <Outlet />
├── pages/
│   ├── Homepage.jsx        # Banner + AllBooks (with Suspense)
│   ├── Books.jsx           # Tabbed Read List / Wishlist
│   ├── BookDetails.jsx     # Full detail page
│   └── Page.jsx            # Pages to read + chart
├── router/
│   └── index.jsx           # createBrowserRouter config
├── main.jsx
└── index.css
public/
└── booksData.json          # Book data source
```

---

## ⚙️ Key Concepts Implemented

**React Router v7**
- `createBrowserRouter` with layout-based structure
- Route `loader` to pre-fetch data before `BookDetails` renders
- `useLoaderData`, `useParams`, `NavLink`, `Link`, `Outlet`

**Data Fetching**
- `use()` hook with `<Suspense>` for async book fetching on Homepage
- Promise defined outside the component to avoid refetch on re-render

**Global State — Context API**
- `BooksContext` provides `readList`, `wishList`, `addToReadList`, `addToWishList`
- No prop drilling — any component accesses lists via `useContext`
- State synced to `localStorage` via `useEffect` on every update
- Lists restored from `localStorage` on page load via lazy `useState` init

**Duplicate Prevention Logic**
- A book already in the read list cannot be added to wishlist and vice versa
- Error toasts shown for duplicate attempts

---

## 🚀 Getting Started

```bash
# 1. Clone the repository
git clone https://github.com/your-username/book-vibe.git

# 2. Navigate into the project
cd book-vibe

# 3. Install dependencies
npm install

# 4. Start the dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📦 Dependencies

```bash
npm install react-router-dom react-hot-toast react-tabs recharts
```

---

## 📸 Screenshots

<!-- Add screenshots here -->
| Homepage | Book Details | Listed Books |
|---|---|---|
| ![homepage](#) | ![details](#) | ![listed](#) |

---

## 🧠 What I Learned

- How `use()` hook with `Suspense` works for data fetching in React 19
- Route-level data loading with `loader` and `useLoaderData`
- Managing global state with Context API without external libraries
- Persisting state to localStorage and restoring it with lazy initialization
- Building custom SVG chart shapes inside Recharts

---

## 📄 License

MIT License — feel free to use and modify.
