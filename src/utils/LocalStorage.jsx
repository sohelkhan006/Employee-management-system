const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        title: "Prepare sales report",
        description: "Compile monthly sales data and prepare report",
        date: "2026-02-01",
        category: "Sales",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Client follow-up",
        description: "Call client regarding contract renewal",
        date: "2026-02-03",
        category: "Communication",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Update CRM",
        description: "Update customer records in CRM system",
        date: "2026-02-05",
        category: "Admin",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        title: "Design homepage",
        description: "Create UI design for homepage",
        date: "2026-02-02",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Fix login bug",
        description: "Resolve authentication issue",
        date: "2026-02-04",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Code review",
        description: "Review teammate pull requests",
        date: "2026-02-06",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        title: "Write test cases",
        description: "Create unit test cases for new module",
        date: "2026-02-01",
        category: "Testing",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Bug verification",
        description: "Verify resolved bugs",
        date: "2026-02-03",
        category: "QA",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Automation script",
        description: "Write automation test script",
        date: "2026-02-07",
        category: "Automation",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        title: "Content writing",
        description: "Write blog post for product launch",
        date: "2026-02-02",
        category: "Content",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "SEO optimization",
        description: "Optimize blog for search engines",
        date: "2026-02-05",
        category: "Marketing",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Social media post",
        description: "Schedule social media updates",
        date: "2026-02-06",
        category: "Marketing",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        title: "Inventory check",
        description: "Check and update inventory records",
        date: "2026-02-01",
        category: "Operations",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Vendor meeting",
        description: "Attend meeting with suppliers",
        date: "2026-02-04",
        category: "Operations",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Order processing",
        description: "Process pending orders",
        date: "2026-02-07",
        category: "Logistics",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};
export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
  console.log(employees, admin);
};
