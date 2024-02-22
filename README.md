# Fix Health FE Screening Task

## Goal:

Create a new landing page for the Fix Health website with a focus on simplicity and user engagement. The landing page will be based on a dark theme and feature essential sections, each carefully designed for an optimal user experience.


### Tech Stack:

- **Framework:** React.js
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Routing:** React Router (react-router-dom)
- **Testimonials Slider:** Swiper.js
- **Form Handling:** React Hook Form

### Sections:

1. **Hero Image:**
   - An eye-catching hero image that resonates with the Fix Health brand and instantly captures the user's attention.

2. **Consultation Booking Form:**
   - A minimalistic booking form designed for ease of use.
   - The form will consist of the following steps:
     - Step 1: Name + Phone number
     - Step 2: Age + City + Company
     - Step 3: Chief complaints
     - Step 4: Any previous experience with physiotherapy
   - Consideration: If the age is less than 40 years, skip the check for previous experience with physiotherapy.

3. **Testimonials:**
   - Display positive testimonials from previous clients to build trust and credibility.

4. **Dynamic Doctor Listings:**
   - Implement a dynamic doctor listing section that shows the best available doctors based on the user's input.
   - Use an API hosted on a free server to retrieve data about available doctors.
   - API Response Format: Each doctor entry should include name, expertise, and city.
   - Consideration: If a URL parameter 'city' is passed to the landing page, it should override the city entered by the patient when filtering doctors.

## How to start

- Clone this repo in your local machine.

## Commands to start

- Install node_moudles folder with the help of below command.

```bash
   npm install
```
- After that Run the below command to start the project.

```bash
   npm run build
```
