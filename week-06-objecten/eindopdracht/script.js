let filter = 'all';

const userList = document.getElementById('users');
const filterAdminButton = document.getElementById('filter-admin');
const filterAllButton = document.getElementById('filter-all');
const userForm = document.getElementById('user-form');

const users = [
  { name: 'Jan de Vries', email: 'jan@bedrijf.nl', role: 'admin', active: true },
  { name: 'Lisa Bakker', email: 'lisa@bedrijf.nl', role: 'user', active: true },
  { name: 'Tom Visser', email: 'tom@bedrijf.nl', role: 'user', active: false },
  { name: 'Sara Meijer', email: 'sara@bedrijf.nl', role: 'admin', active: true },
];



const showUsers = (usersToShow) => {
  userList.innerHTML = usersToShow
    .map((user) => {
      const { name, email, role, active } = user;
      return `
        <article>
          <h3>${name}</h3>
          <p>${email}</p>
          <p>Rol: ${role}</p>
          <p>Status: ${active ? 'Actief' : 'Inactief'}</p>
        </article>
      `;
    })
    .join('');
};

const filterUsers = () => {
  const filteredUsers = filter === 'admin'
    ? users.filter((user) => user.role === 'admin')
    : users;

  showUsers(filteredUsers);
};

filterAdminButton.addEventListener('click', () => {
  filter = 'admin';
  filterUsers();
});

filterAllButton.addEventListener('click', () => {
  filter = 'all';
  filterUsers();
});

userForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const roleInput = document.getElementById('role');

  const newUser = {
    ...{
      name: '',
      email: '',
      role: 'user',
      active: true,
    },
    name: nameInput.value,
    email: emailInput.value,
    role: roleInput.value,
  };

  users.push(newUser);
  filterUsers();
  userForm.reset();
});

filterUsers();
