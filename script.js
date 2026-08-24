/* ============================= DATA ============================= */
/* Edit QUESTIONS below to customize the exam. */
const SCHEMA_SQL = `
CREATE TABLE departments (
  dept_id INTEGER PRIMARY KEY,
  dept_name TEXT NOT NULL,
  location TEXT
);
CREATE TABLE employees (
  emp_id INTEGER PRIMARY KEY,
  emp_name TEXT NOT NULL,
  dept_id INTEGER,
  salary REAL,
  hire_date TEXT,
  age INTEGER
);
INSERT INTO departments (dept_id, dept_name, location) VALUES
(1,'IT','Main Building'),
(2,'HR','Annex A'),
(3,'Sales','Annex B'),
(4,'Finance','Main Building'),
(5,'Marketing','Annex A');
INSERT INTO employees (emp_id, emp_name, dept_id, salary, hire_date, age) VALUES
(1,'Juan Dela Cruz',1,32000,'2021-03-15',29),
(2,'Maria Santos',1,41000,'2019-07-01',34),
(3,'Pedro Reyes',1,27000,'2022-11-20',25),
(4,'Ana Lim',2,35000,'2020-05-10',31),
(5,'Jose Garcia',2,29000,'2023-01-05',24),
(6,'Liza Cruz',3,38000,'2018-09-12',40),
(7,'Mark Torres',3,45000,'2017-02-28',45),
(8,'Carla Mendoza',3,31000,'2021-08-19',27),
(9,'Ramon Aquino',4,52000,'2015-06-30',50),
(10,'Sofia Ramos',4,47000,'2019-04-22',36),
(11,'Miguel Bautista',4,29500,'2022-10-01',26),
(12,'Elena Villanueva',5,33000,'2020-12-15',33),
(13,'Diego Fernandez',5,26000,'2023-03-08',23),
(14,'Isabel Navarro',1,39000,'2018-01-17',38),
(15,'Rafael Ocampo',5,30000,'2021-06-25',28);
`;

const QUESTIONS = [
  {
    id: 1, difficulty: 'easy', tags: ['SELECT'], type: 'select', orderMatters: false,
    text: "Select all columns and all rows from the employees table.",
    hint: "Use SELECT * with a FROM clause — no WHERE needed.",
    sql: "SELECT * FROM employees;"
  },
  {
    id: 2, difficulty: 'easy', tags: ['SELECT'], type: 'select', orderMatters: false,
    text: "Show all employees whose salary is greater than 30000.",
    hint: "Add a WHERE clause using the greater-than operator on salary.",
    sql: "SELECT * FROM employees WHERE salary > 30000;"
  },
  {
    id: 3, difficulty: 'medium', tags: ['SELECT'], type: 'select', orderMatters: true,
    text: "Display emp_name and salary of every employee, ordered by salary from highest to lowest.",
    hint: "Use ORDER BY salary DESC.",
    sql: "SELECT emp_name, salary FROM employees ORDER BY salary DESC;"
  },
  {
    id: 4, difficulty: 'easy', tags: ['SELECT'], type: 'select', orderMatters: false,
    text: "Find all employees whose name starts with the letter 'A'.",
    hint: "Use WHERE emp_name LIKE 'A%'.",
    sql: "SELECT * FROM employees WHERE emp_name LIKE 'A%';"
  },
  {
    id: 5, difficulty: 'easy', tags: ['INSERT'], type: 'dml', table: 'employees', pk: 'emp_id',
    text: "Insert a new employee: emp_id 16, emp_name 'Grace Lim', dept_id 2, salary 28000, hire_date '2024-01-15', age 26.",
    hint: "INSERT INTO employees (columns...) VALUES (values...);",
    sql: "INSERT INTO employees (emp_id, emp_name, dept_id, salary, hire_date, age) VALUES (16, 'Grace Lim', 2, 28000, '2024-01-15', 26);"
  },
  {
    id: 6, difficulty: 'easy', tags: ['UPDATE'], type: 'dml', table: 'employees', pk: 'emp_id',
    text: "Update the salary of the employee with emp_id 3 to 45000.",
    hint: "UPDATE employees SET salary = 45000 WHERE emp_id = 3;",
    sql: "UPDATE employees SET salary = 45000 WHERE emp_id = 3;"
  },
  {
    id: 7, difficulty: 'easy', tags: ['DELETE'], type: 'dml', table: 'employees', pk: 'emp_id',
    text: "Delete the employee with emp_id 10 from the employees table.",
    hint: "DELETE FROM employees WHERE emp_id = 10;",
    sql: "DELETE FROM employees WHERE emp_id = 10;"
  },
  {
    id: 8, difficulty: 'medium', tags: ['JOIN'], type: 'select', orderMatters: false,
    text: "List every employee's name together with their department's name.",
    hint: "JOIN employees to departments ON matching dept_id.",
    sql: "SELECT e.emp_name, d.dept_name FROM employees e JOIN departments d ON e.dept_id = d.dept_id;"
  },
  {
    id: 9, difficulty: 'medium', tags: ['JOIN'], type: 'select', orderMatters: false,
    text: "Show the names and department location of employees who work in the 'IT' department.",
    hint: "Join the two tables, then filter WHERE dept_name = 'IT'.",
    sql: "SELECT e.emp_name, d.location FROM employees e JOIN departments d ON e.dept_id = d.dept_id WHERE d.dept_name = 'IT';"
  },
  {
    id: 10, difficulty: 'medium', tags: ['GROUP BY', 'COUNT'], type: 'select', orderMatters: false,
    text: "Count how many employees belong to each department. Show dept_id and the count.",
    hint: "GROUP BY dept_id, then use COUNT(*).",
    sql: "SELECT dept_id, COUNT(*) FROM employees GROUP BY dept_id;"
  },
  {
    id: 11, difficulty: 'medium', tags: ['GROUP BY', 'SUM'], type: 'select', orderMatters: false,
    text: "Show the total salary paid per department (dept_id and total salary).",
    hint: "GROUP BY dept_id, then use SUM(salary).",
    sql: "SELECT dept_id, SUM(salary) FROM employees GROUP BY dept_id;"
  },
  {
    id: 12, difficulty: 'medium', tags: ['GROUP BY', 'AVG'], type: 'select', orderMatters: false,
    text: "Show the average salary per department (dept_id and average salary).",
    hint: "GROUP BY dept_id, then use AVG(salary).",
    sql: "SELECT dept_id, AVG(salary) FROM employees GROUP BY dept_id;"
  },
  {
    id: 13, difficulty: 'hard', tags: ['GROUP BY', 'HAVING', 'COUNT'], type: 'select', orderMatters: false,
    text: "Show only the departments that have more than 2 employees (dept_id and count).",
    hint: "GROUP BY dept_id, then HAVING COUNT(*) > 2.",
    sql: "SELECT dept_id, COUNT(*) FROM employees GROUP BY dept_id HAVING COUNT(*) > 2;"
  },
  {
    id: 14, difficulty: 'hard', tags: ['GROUP BY', 'HAVING', 'AVG'], type: 'select', orderMatters: false,
    text: "Show departments where the average employee salary is above 30000 (dept_id and average salary).",
    hint: "GROUP BY dept_id, then HAVING AVG(salary) > 30000.",
    sql: "SELECT dept_id, AVG(salary) FROM employees GROUP BY dept_id HAVING AVG(salary) > 30000;"
  },
  {
    id: 15, difficulty: 'easy', tags: ['MAX'], type: 'select', orderMatters: false,
    text: "Find the highest salary among all employees.",
    hint: "SELECT MAX(salary) FROM employees;",
    sql: "SELECT MAX(salary) FROM employees;"
  },
  {
    id: 16, difficulty: 'easy', tags: ['MIN'], type: 'select', orderMatters: false,
    text: "Find the lowest salary among all employees.",
    hint: "SELECT MIN(salary) FROM employees;",
    sql: "SELECT MIN(salary) FROM employees;"
  },
  {
    id: 17, difficulty: 'easy', tags: ['COUNT'], type: 'select', orderMatters: false,
    text: "Count the total number of employees in the company.",
    hint: "SELECT COUNT(*) FROM employees;",
    sql: "SELECT COUNT(*) FROM employees;"
  },
  {
    id: 18, difficulty: 'easy', tags: ['SUM'], type: 'select', orderMatters: false,
    text: "Find the combined total of all employee salaries.",
    hint: "SELECT SUM(salary) FROM employees;",
    sql: "SELECT SUM(salary) FROM employees;"
  },
  {
    id: 19, difficulty: 'hard', tags: ['JOIN', 'GROUP BY', 'COUNT'], type: 'select', orderMatters: false,
    text: "Show each department's name together with the number of employees in it, using a JOIN.",
    hint: "Join departments to employees, GROUP BY dept_name, use COUNT(emp_id).",
    sql: "SELECT d.dept_name, COUNT(e.emp_id) FROM departments d JOIN employees e ON d.dept_id = e.dept_id GROUP BY d.dept_name;"
  },
  {
    id: 20, difficulty: 'hard', tags: ['JOIN', 'GROUP BY', 'HAVING', 'AVG'], type: 'select', orderMatters: false,
    text: "Using a JOIN, show department names where the average employee salary is above 30000.",
    hint: "Join, GROUP BY dept_name, then HAVING AVG(salary) > 30000.",
    sql: "SELECT d.dept_name, AVG(e.salary) FROM departments d JOIN employees e ON d.dept_id = e.dept_id GROUP BY d.dept_name HAVING AVG(e.salary) > 30000;"
  },
  {
    id: 21, difficulty: 'medium', tags: ['UPDATE'], type: 'dml', table: 'employees', pk: 'emp_id',
    text: "Give every employee in dept_id 3 a 10% salary increase.",
    hint: "UPDATE employees SET salary = salary * 1.1 WHERE dept_id = 3;",
    sql: "UPDATE employees SET salary = salary * 1.1 WHERE dept_id = 3;"
  },
  {
    id: 22, difficulty: 'easy', tags: ['SELECT'], type: 'select', orderMatters: false,
    text: "Show employees in dept_id 1 who also earn more than 30000 (combine two conditions).",
    hint: "Combine two conditions with AND in the WHERE clause.",
    sql: "SELECT * FROM employees WHERE dept_id = 1 AND salary > 30000;"
  },
  {
    id: 23, difficulty: 'easy', tags: ['SELECT'], type: 'select', orderMatters: false,
    text: "Show employees whose age is between 25 and 35, inclusive.",
    hint: "Use WHERE age BETWEEN 25 AND 35.",
    sql: "SELECT * FROM employees WHERE age BETWEEN 25 AND 35;"
  },
  {
    id: 24, difficulty: 'easy', tags: ['SELECT'], type: 'select', orderMatters: false,
    text: "Show employees who belong to dept_id 1, 3, or 5.",
    hint: "Use WHERE dept_id IN (1, 3, 5).",
    sql: "SELECT * FROM employees WHERE dept_id IN (1,3,5);"
  },
  {
    id: 25, difficulty: 'easy', tags: ['INSERT'], type: 'dml', table: 'departments', pk: 'dept_id',
    text: "Insert a new department: dept_id 6, dept_name 'Legal', location 'Annex C'.",
    hint: "INSERT INTO departments (columns...) VALUES (values...);",
    sql: "INSERT INTO departments (dept_id, dept_name, location) VALUES (6, 'Legal', 'Annex C');"
  },
  {
    id: 26, difficulty: 'easy', tags: ['UPDATE'], type: 'dml', table: 'employees', pk: 'emp_id',
    text: "Move Ana Lim to dept_id 3.",
    hint: "UPDATE employees SET dept_id = 3 WHERE emp_name = 'Ana Lim';",
    sql: "UPDATE employees SET dept_id = 3 WHERE emp_name = 'Ana Lim';"
  },
  {
    id: 27, difficulty: 'easy', tags: ['DELETE'], type: 'dml', table: 'employees', pk: 'emp_id',
    text: "Delete all employees older than 45.",
    hint: "DELETE FROM employees WHERE age > 45;",
    sql: "DELETE FROM employees WHERE age > 45;"
  },
  {
    id: 28, difficulty: 'hard', tags: ['JOIN', 'SUM'], type: 'select', orderMatters: false,
    text: "Using a JOIN, show the total salary of employees in the 'Finance' department.",
    hint: "Join the tables, filter WHERE dept_name = 'Finance', then SUM(e.salary).",
    sql: "SELECT SUM(e.salary) FROM employees e JOIN departments d ON e.dept_id = d.dept_id WHERE d.dept_name = 'Finance';"
  },
  {
    id: 29, difficulty: 'medium', tags: ['GROUP BY', 'MAX'], type: 'select', orderMatters: false,
    text: "Show the highest salary within each department (dept_id and max salary).",
    hint: "GROUP BY dept_id, then use MAX(salary).",
    sql: "SELECT dept_id, MAX(salary) FROM employees GROUP BY dept_id;"
  },
  {
    id: 30, difficulty: 'hard', tags: ['GROUP BY', 'HAVING', 'MIN'], type: 'select', orderMatters: false,
    text: "Show departments where the lowest salary is below 28000 (dept_id and min salary).",
    hint: "GROUP BY dept_id, then HAVING MIN(salary) < 28000.",
    sql: "SELECT dept_id, MIN(salary) FROM employees GROUP BY dept_id HAVING MIN(salary) < 28000;"
  },
];
const ALL_TAGS = ['SELECT', 'INSERT', 'UPDATE', 'DELETE', 'JOIN', 'GROUP BY', 'HAVING', 'COUNT', 'SUM', 'AVG', 'MIN', 'MAX'];

/* ============================= STATE ============================= */
let SQL = null;
let originalBytes = null;
let ORIGINAL_PKS = null;    // { employees: Set, departments: Set } — used to detect newly inserted rows
let ORIGINAL_TABLE_ROWS = null; // { employees: {columns,values}, departments: {columns,values} } — pre-change snapshot, for similarity scoring
let pool = [];              // question ids not yet used by any student this session
let currentQ = null;
let hintUsed = false;       // true once hint is shown (manually or via timeout) — caps score to the reduced tier
let timerStarted = false;   // timer only starts once the student begins typing
let turnSubmitted = false;  // true once this student's single attempt has been scored
let lastScore = null;       // most recent student's score, for the header chip
const MAX_PER_Q = 50;         // full credit ceiling — no hint used
const REDUCED_MAX_PER_Q = 30; // credit ceiling once the hint has been used (manual or timeout)
const TIME_LIMIT_SECONDS = 120;
let debounceTimer = null;
let timerInterval = null;
let remainingSeconds = TIME_LIMIT_SECONDS;
let studentName = '';
let leaderboard = [];
const LEADERBOARD_KEY = 'sqlPracticalExam_leaderboard_v2';
let currentMode = 'practice'; // 'practice' | 'exam'
let practiceAttempts = 0; // number of attempts made in practice mode for current question
let selectedDifficulty = 'all'; // practice-mode filter; exam mode always uses all questions
let turnStartTime = 0;
let currentKeystrokeHistory = [];
let leaderboardSearchQuery = '';
let replayActiveEntry = null;
let replayIndex = 0;
let replayTimer = null;
let isReplaying = false;
let replaySpeed = 2;

/* ============================= EXAM MODE SCHEDULE & AUTHORIZATION ============================= */
const SCHEDULE_KEY = 'sqlPracticalExam_schedule_v1';
const TEACHER_PASSWORD = "iamatomic";

let examSchedule = {
  enabled: false,
  startISO: '',
  endISO: ''
};

function loadExamSchedule() {
  initFirebase();
  if (isFirebaseConfigured && scheduleDbRef) {
    scheduleDbRef.on('value', (snapshot) => {
      const data = snapshot.val();
      if (data) {
        examSchedule = data;
      } else {
        examSchedule = { enabled: false, startISO: '', endISO: '' };
      }
      updateScheduleUI();
    });
  } else {
    try {
      const raw = localStorage.getItem(SCHEDULE_KEY);
      if (raw) examSchedule = JSON.parse(raw);
    } catch (e) {
      examSchedule = { enabled: false, startISO: '', endISO: '' };
    }
    updateScheduleUI();
  }
}

function saveExamSchedule() {
  if (isFirebaseConfigured && scheduleDbRef) {
    scheduleDbRef.set(examSchedule);
  }
  try {
    localStorage.setItem(SCHEDULE_KEY, JSON.stringify(examSchedule));
  } catch (e) { /* ignore storage error */ }
  updateScheduleUI();
}

function checkExamAvailability() {
  if (!examSchedule || !examSchedule.enabled) {
    return { available: false, status: 'no_schedule', message: '🔒 Exam Mode is currently closed. A teacher must set an Exam Schedule to open it.' };
  }
  const now = Date.now();
  const startTime = examSchedule.startISO ? new Date(examSchedule.startISO).getTime() : 0;
  const endTime = examSchedule.endISO ? new Date(examSchedule.endISO).getTime() : Infinity;

  if (startTime && now < startTime) {
    const startStr = new Date(examSchedule.startISO).toLocaleString([], { month:'short', day:'numeric', year:'numeric', hour:'2-digit', minute:'2-digit' });
    return { available: false, status: 'scheduled', message: `🔒 Exam Mode is locked. Scheduled to open on ${startStr}` };
  }
  if (endTime && now > endTime) {
    const endStr = new Date(examSchedule.endISO).toLocaleString([], { month:'short', day:'numeric', year:'numeric', hour:'2-digit', minute:'2-digit' });
    return { available: false, status: 'closed', message: `🔒 Exam Mode is closed. The exam ended on ${endStr}` };
  }
  return { available: true, status: 'open', message: '🟢 Exam Mode is currently active' };
}

function updateScheduleUI() {
  const avail = checkExamAvailability();
  const noticeEl = document.getElementById('examScheduleNotice');
  const cardExam = document.getElementById('modeCardExam');
  const errEl = document.getElementById('nameError');
  const startBtn = document.getElementById('startExamBtn');
  const nameInput = document.getElementById('studentNameInput');

  if (noticeEl) {
    if (!avail.available) {
      noticeEl.textContent = avail.message;
      noticeEl.style.display = 'block';
    } else if (examSchedule && examSchedule.enabled) {
      noticeEl.textContent = '🟢 Exam Schedule Active';
      noticeEl.style.display = 'block';
    } else {
      noticeEl.style.display = 'none';
    }
  }

  if (cardExam) {
    cardExam.classList.toggle('disabled', !avail.available);
  }

  if (currentMode === 'exam' && !avail.available) {
    if (errEl) {
      errEl.textContent = avail.message;
      errEl.style.display = 'block';
    }
    if (startBtn) startBtn.disabled = true;
    if (nameInput) nameInput.disabled = true;
  }
}

function promptExamScheduleSettings() {
  const pass = prompt('Enter teacher password to configure Exam Schedule:');
  if (pass === null) return;
  if (pass.trim() === TEACHER_PASSWORD) {
    openScheduleModal();
  } else {
    alert('Incorrect password! Teacher authorization required.');
  }
}

function openScheduleModal() {
  const modal = document.getElementById('examScheduleModalOverlay');
  const chk = document.getElementById('scheduleEnableCheckbox');
  const startInp = document.getElementById('scheduleStartInput');
  const endInp = document.getElementById('scheduleEndInput');
  const fieldsWrap = document.getElementById('scheduleFieldsWrap');
  const statusEl = document.getElementById('scheduleModalStatus');

  if (!modal) return;

  chk.checked = !!examSchedule.enabled;
  startInp.value = examSchedule.startISO || '';
  endInp.value = examSchedule.endISO || '';

  const updateFieldsState = () => {
    if (fieldsWrap) {
      fieldsWrap.style.opacity = chk.checked ? '1' : '0.5';
      fieldsWrap.style.pointerEvents = chk.checked ? 'auto' : 'none';
    }
  };
  updateFieldsState();

  chk.onchange = updateFieldsState;

  if (statusEl) {
    const avail = checkExamAvailability();
    if (examSchedule.enabled) {
      statusEl.textContent = avail.available ? 'Status: 🟢 Exam is Open' : `Status: ${avail.message}`;
      statusEl.style.color = avail.available ? 'var(--green)' : 'var(--amber)';
      statusEl.style.display = 'block';
    } else {
      statusEl.style.display = 'none';
    }
  }

  modal.classList.add('show');
}

function closeScheduleModal() {
  document.getElementById('examScheduleModalOverlay')?.classList.remove('show');
}

function saveScheduleFromModal() {
  const chk = document.getElementById('scheduleEnableCheckbox');
  const startInp = document.getElementById('scheduleStartInput');
  const endInp = document.getElementById('scheduleEndInput');

  if (chk.checked) {
    if (!startInp.value && !endInp.value) {
      alert('Please specify at least a Start Date/Time or End Date/Time.');
      return;
    }
    if (startInp.value && endInp.value && new Date(startInp.value) >= new Date(endInp.value)) {
      alert('Start Date & Time must be earlier than End Date & Time.');
      return;
    }
  }

  examSchedule = {
    enabled: chk.checked,
    startISO: startInp.value || '',
    endISO: endInp.value || ''
  };

  saveExamSchedule();
  closeScheduleModal();
  alert('Exam schedule updated successfully!');
}

function clearScheduleFromModal() {
  examSchedule = { enabled: false, startISO: '', endISO: '' };
  saveExamSchedule();
  closeScheduleModal();
  alert('Exam schedule cleared.');
}


/* ============================= INIT ============================= */
initSqlJs({ locateFile: f => `https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.2.1/dist/${f}` })
  .then(sqlModule => {
    SQL = sqlModule;
    const db = new SQL.Database();
    db.run(SCHEMA_SQL);
    originalBytes = db.export();
    renderReferenceTables(db);
    ORIGINAL_PKS = {
      employees: new Set(db.exec("SELECT emp_id FROM employees;")[0].values.map(r => r[0])),
      departments: new Set(db.exec("SELECT dept_id FROM departments;")[0].values.map(r => r[0]))
    };
    ORIGINAL_TABLE_ROWS = {
      employees: db.exec("SELECT * FROM employees;")[0],
      departments: db.exec("SELECT * FROM departments;")[0]
    };
    db.close();
    pool = QUESTIONS.map(q => q.id); // question bank for the whole session — shared across every student
    loadExamSchedule();
    loadLeaderboard();
    renderLeaderboard();
    updateScheduleUI();
    updateHud();
    unlockNameModal();
  })
  .catch(err => {
    const sub = document.querySelector('#nameModalOverlay .modal > div[style*="text-faint"]');
    if (sub) sub.textContent = 'Failed to load the SQL engine. Check your internet connection and reload.';
    console.error(err);
  });

function selectMode(mode) {
  currentMode = mode;
  const avail = checkExamAvailability();

  // Toggle visual selection state on mode cards
  document.getElementById('modeCardPractice')?.classList.toggle('selected', mode === 'practice');
  document.getElementById('modeCardExam')?.classList.toggle('selected', mode === 'exam');

  const sub = document.getElementById('modalSubtext');
  const nameWrap = document.getElementById('nameFieldWrap');
  const difficultyWrap = document.getElementById('difficultyWrap');
  const startBtn = document.getElementById('startExamBtn');
  const errEl = document.getElementById('nameError');

  if (!avail.available && mode === 'exam') {
    if (errEl) {
      errEl.textContent = avail.message;
      errEl.style.display = 'block';
    }
  } else if (errEl) {
    errEl.style.display = 'none';
  }

  if (sub) {
    sub.textContent = mode === 'practice'
      ? 'Practice mode: unlimited attempts, free hints, no score penalty.'
      : 'Exam mode: one attempt per student. The exam uses the full question bank.';
  }

  // Difficulty is available ONLY in Practice Mode.
  if (difficultyWrap) difficultyWrap.style.display = mode === 'practice' ? 'block' : 'none';

  // Practice mode does not require a name; Exam mode does.
  if (nameWrap) nameWrap.style.display = mode === 'practice' ? 'none' : 'block';
  if (startBtn) {
    startBtn.disabled = mode === 'exam' && !avail.available;
    startBtn.textContent = mode === 'practice' ? 'Start Practice →' : 'Start Exam →';
  }

  if (mode === 'exam') {
    const input = document.getElementById('studentNameInput');
    if (input) {
      input.disabled = !avail.available;
      if (avail.available) setTimeout(() => input.focus(), 0);
    }
  }
  updateScheduleUI();
}

function backToModeChoices() {
  stopTimer();
  const input = document.getElementById('studentNameInput');
  if (input) input.value = '';
  const err = document.getElementById('nameError');
  if (err) err.style.display = 'none';
  selectMode('practice');
}

function selectDifficulty(difficulty) {
  if (currentMode !== 'practice') return;
  selectedDifficulty = difficulty;
  document.querySelectorAll('.diff-pill').forEach(el => el.classList.remove('selected'));
  const pill = document.getElementById(`diffPill${difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}`);
  if (pill) pill.classList.add('selected');
}

function unlockNameModal() {
  studentName = '';
  document.getElementById('studentLabel').textContent = '—';
  const input = document.getElementById('studentNameInput');
  if (input) {
    input.value = '';
    input.disabled = false;
  }
  const errEl = document.getElementById('nameError');
  if (errEl) errEl.style.display = 'none';

  const sub = document.getElementById('modalSubtext');
  if (sub) sub.textContent = 'Select Practice Mode or Exam Mode to continue.';
  selectMode(currentMode);
}

document.getElementById('startExamBtn').addEventListener('click', submitStudentName);
document.getElementById('backBtn').addEventListener('click', () => {
  promptNewStudent();
});
document.getElementById('studentNameInput').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') { e.preventDefault(); submitStudentName(); }
});

function isNameTaken(name) {
  if (!name) return false;
  const lower = name.trim().toLowerCase();
  return leaderboard.some(entry => entry.name && entry.name.trim().toLowerCase() === lower);
}

function submitStudentName() {
  const input = document.getElementById('studentNameInput');
  const errEl = document.getElementById('nameError');

  const name = input.value.trim();

  if (currentMode === 'practice') {
    // Practice mode: name is optional — no need to enter one to start.
    if (name && isNameTaken(name)) {
      errEl.textContent = 'This name has already been used on the leaderboard. Please enter a different name.';
      errEl.style.display = 'block';
      input.focus();
      return;
    }
    errEl.style.display = 'none';
    studentName = name || 'Practice Student';
    document.getElementById('studentLabel').textContent = studentName;
    document.getElementById('nameModalOverlay').classList.remove('show');
    beginStudentTurn();
    return;
  }

  if (!name) {
    errEl.textContent = 'Please enter your name before starting.';
    errEl.style.display = 'block';
    input.focus();
    return;
  }

  if (isNameTaken(name)) {
    errEl.textContent = 'This name has already been used on the leaderboard. Please enter a different name.';
    errEl.style.display = 'block';
    input.focus();
    return;
  }

  errEl.style.display = 'none';
  studentName = name;
  document.getElementById('studentLabel').textContent = studentName;
  document.getElementById('nameModalOverlay').classList.remove('show');
  beginStudentTurn();
}

/* ============================= TURN FLOW (one student, one question) ============================= */
function beginStudentTurn() {
  hintUsed = false;
  timerStarted = false;
  turnSubmitted = false;
  practiceAttempts = 0;
  turnStartTime = Date.now();
  currentKeystrokeHistory = [{ t: 0, val: '' }];

  // Update mode UI
  document.getElementById('modeLabel').textContent = currentMode === 'practice' ? 'Practice' : 'Exam';
  const banner = document.getElementById('modeBanner');
  const bannerText = document.getElementById('modeBannerText');
  banner.style.display = 'flex';
  if (currentMode === 'practice') {
    banner.className = 'mode-banner practice';
    bannerText.textContent = '🧪 Practice Mode — unlimited attempts, hints free, no penalty';
    document.getElementById('tryAgainBtn').style.display = 'none';
  } else {
    banner.className = 'mode-banner exam';
    bannerText.textContent = '🏆 Exam Mode — one attempt · timer starts on first keystroke · hint caps score at 30/50';
    document.getElementById('tryAgainBtn').style.display = 'none';
  }

  // Practice Mode can filter by difficulty. Exam Mode ignores difficulty and uses all questions.
  const candidates = currentMode === 'practice' && selectedDifficulty !== 'all'
    ? pool.filter(qid => {
      const q = QUESTIONS.find(item => item.id === qid);
      return q && q.difficulty === selectedDifficulty;
    })
    : pool;

  if (candidates.length === 0) {
    showBankExhausted();
    return;
  }
  const id = candidates[Math.floor(Math.random() * candidates.length)];
  pool = pool.filter(x => x !== id); // this question is now spent for the whole session
  currentQ = QUESTIONS.find(q => q.id === id);
  renderQuestion();
  resetEditorAndResults();

  // Skip button — only relevant in practice mode, where a student can move on freely.
  document.getElementById('skipBtn').style.display = currentMode === 'practice' ? 'inline-block' : 'none';

  if (currentMode === 'practice') {
    // In practice mode: no timer, always show hint button freely
    const chip = document.getElementById('timerChip');
    chip.textContent = '∞ no time limit';
    chip.classList.remove('warn', 'expired');
  } else {
    resetTimerIdle();
  }
  updateHud();
}

function promptNewStudent() {
  stopTimer();
  studentName = '';
  document.getElementById('studentLabel').textContent = '—';

  if (currentMode === 'exam') {
    // Show the lightweight next-student modal instead of the full setup modal
    const inp = document.getElementById('nextStudentNameInput');
    inp.value = '';
    document.getElementById('nextStudentNameError').style.display = 'none';
    document.getElementById('nextStudentModalOverlay').classList.add('show');
    setTimeout(() => inp.focus(), 0);
  } else {
    // Practice mode: just reset the main modal
    document.getElementById('studentNameInput').value = '';
    document.getElementById('nameError').style.display = 'none';
    document.getElementById('nameModalOverlay').classList.add('show');
    selectMode(currentMode);
  }
}

/* ---- Next-student modal handlers (exam mode) ---- */
function submitNextStudent() {
  const inp = document.getElementById('nextStudentNameInput');
  const errEl = document.getElementById('nextStudentNameError');
  const name = inp.value.trim();
  if (!name) {
    errEl.textContent = "Please enter the student's name before starting.";
    errEl.style.display = 'block';
    inp.focus();
    return;
  }
  if (isNameTaken(name)) {
    errEl.textContent = 'This name has already been used on the leaderboard. Please enter a different name.';
    errEl.style.display = 'block';
    inp.focus();
    return;
  }
  errEl.style.display = 'none';
  studentName = name;
  document.getElementById('studentLabel').textContent = studentName;
  document.getElementById('nextStudentModalOverlay').classList.remove('show');
  beginStudentTurn();
}

document.getElementById('nextStudentStartBtn').addEventListener('click', submitNextStudent);
document.getElementById('nextStudentNameInput').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') { e.preventDefault(); submitNextStudent(); }
});
document.getElementById('nextStudentBackBtn').addEventListener('click', () => {
  // Go back to the full setup modal so the user can switch modes
  document.getElementById('nextStudentModalOverlay').classList.remove('show');
  document.getElementById('nameModalOverlay').classList.add('show');
  unlockNameModal();
});

function showBankExhausted() {
  document.getElementById('qCategoryTitle').textContent = 'question bank';
  document.getElementById('qTagsRow').innerHTML = '';
  const label = currentMode === 'practice' && selectedDifficulty !== 'all'
    ? `All ${selectedDifficulty} questions have already been used this session. Choose another difficulty or reset the question bank.`
    : 'All questions have already been used this session. Ask your teacher to reset the question bank to continue.';
  document.getElementById('qText').textContent = label;
  document.getElementById('hintLine').classList.remove('show', 'auto');
  document.getElementById('timerChip').textContent = '⏱ —';
  document.getElementById('timerChip').classList.remove('warn', 'expired');
  document.getElementById('queryInput').value = '';
  document.getElementById('queryInput').disabled = true;
  document.getElementById('submitBtn').disabled = true;
  document.getElementById('hintBtn').disabled = true;
  document.getElementById('skipBtn').style.display = 'none';
  document.getElementById('resultArea').innerHTML = '<div class="empty-msg">No question available — the bank is empty.</div>';
  document.getElementById('rowCount').style.display = 'none';
  document.getElementById('feedbackBox').classList.remove('show', 'correct', 'wrong');
  updateScoreMeter('');
}

function resetQuestionBank() {
  pool = QUESTIONS.map(q => q.id);
  updateHud();
}

document.getElementById('resetBankBtn').addEventListener('click', () => {
  if (confirm('Reset the question bank so all 30 questions can be used again this session? Leaderboard history is kept.')) {
    resetQuestionBank();
  }
});

document.getElementById('restartBtn').addEventListener('click', () => {
  const msg = currentMode === 'practice'
    ? "Switch to a new student? The current practice session will end."
    : "End this student's turn and let a new student enter their name? Nothing will be scored for the current question.";
  if (confirm(msg)) {
    if (currentQ && !turnSubmitted) { pool.push(currentQ.id); } // don't waste an unused question
    document.getElementById('tryAgainBtn').style.display = 'none';
    promptNewStudent();
  }
});

/* ============================= LEADERBOARD & FIREBASE ============================= */
// ⬇️ Paste your Firebase project configuration credentials below:
const firebaseConfig = {
  apiKey: "AIzaSyCJmblwxvd3s1x1BMKkIE515MQdDIiDuAU",
  authDomain: "sql-practical-exam.firebaseapp.com",
  databaseURL: "https://sql-practical-exam-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "sql-practical-exam",
  storageBucket: "sql-practical-exam.firebasestorage.app",
  messagingSenderId: "733622565943",
  appId: "1:733622565943:web:09c952aa7b0fe7375ed3b2"
};

let dbRef = null;
let scheduleDbRef = null;
let isFirebaseConfigured = false;

function initFirebase() {
  if (typeof firebase !== 'undefined' && firebaseConfig.apiKey && firebaseConfig.apiKey !== "YOUR_API_KEY") {
    try {
      if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
      }
      dbRef = firebase.database().ref('leaderboard');
      scheduleDbRef = firebase.database().ref('examSchedule');
      isFirebaseConfigured = true;
      console.log('Firebase Cloud Database initialized successfully.');
    } catch (e) {
      console.warn('Firebase init failed, falling back to LocalStorage:', e);
      isFirebaseConfigured = false;
    }
  } else {
    isFirebaseConfigured = false;
  }
}

function loadLeaderboard() {
  initFirebase();
  if (isFirebaseConfigured && dbRef) {
    dbRef.on('value', (snapshot) => {
      const data = snapshot.val();
      if (data) {
        leaderboard = Object.values(data);
      } else {
        leaderboard = [];
      }
      renderLeaderboard();
    });
  } else {
    try {
      const raw = localStorage.getItem(LEADERBOARD_KEY);
      leaderboard = raw ? JSON.parse(raw) : [];
    } catch (e) {
      leaderboard = [];
    }
    renderLeaderboard();
  }
}

function saveLeaderboard() {
  if (!isFirebaseConfigured) {
    try { localStorage.setItem(LEADERBOARD_KEY, JSON.stringify(leaderboard)); } catch (e) { /* storage unavailable — ignore */ }
  }
}

function addToLeaderboard(name, score, maxScore, question) {
  const text = document.getElementById('queryInput')?.value || '';
  if (currentKeystrokeHistory.length <= 1 && text) {
    currentKeystrokeHistory.push({ t: 1000, val: text });
  }
  const entry = {
    name,
    score,
    maxScore,
    pct: Math.round((score / maxScore) * 1000) / 10,
    topic: question ? question.tags.join(', ') : '—',
    questionText: question ? question.text : '',
    submittedQuery: text,
    history: currentKeystrokeHistory.slice(),
    date: new Date().toLocaleString()
  };

  if (isFirebaseConfigured && dbRef) {
    dbRef.push(entry);
  } else {
    leaderboard.push(entry);
    saveLeaderboard();
    renderLeaderboard();
  }
}

function renderLeaderboard() {
  const area = document.getElementById('leaderboardArea');
  const countEl = document.getElementById('leaderboardCount');
  const modalArea = document.getElementById('modalLeaderboardArea');
  const modalCountEl = document.getElementById('modalLeaderboardCount');

  const q = leaderboardSearchQuery.trim().toLowerCase();
  const sorted = leaderboard.slice().sort((a, b) => b.score - a.score);
  const filtered = q
    ? sorted.filter(e =>
        (e.name && e.name.toLowerCase().includes(q)) ||
        (e.topic && e.topic.toLowerCase().includes(q)) ||
        (e.questionText && e.questionText.toLowerCase().includes(q))
      )
    : sorted;

  const countText = q
    ? `${filtered.length} of ${leaderboard.length} entries`
    : `${leaderboard.length} ${leaderboard.length === 1 ? 'entry' : 'entries'}`;

  if (countEl) countEl.textContent = countText;
  if (modalCountEl) modalCountEl.textContent = countText;

  if (filtered.length === 0) {
    const emptyHTML = leaderboard.length === 0
      ? '<div class="empty-msg">No one has finished the exam yet — scores will appear here as students complete it.</div>'
      : `<div class="empty-msg">No entries match "${escapeHTML(leaderboardSearchQuery)}".</div>`;
    if (area) area.innerHTML = emptyHTML;
    if (modalArea) modalArea.innerHTML = emptyHTML;
    return;
  }
  let h = '<table><thead><tr><th>#</th><th>name</th><th>question</th><th>score</th><th>%</th><th>completed</th></tr></thead><tbody>';
  filtered.forEach((entry, i) => {
    const origIdx = leaderboard.indexOf(entry);
    const hasHistory = entry.history && entry.history.length > 0;
    const nameCell = hasHistory
      ? `<a class="student-replay-link" onclick="openReplayModal(${origIdx})" title="Click to replay student typing">🎬 ${escapeHTML(entry.name)}</a>`
      : escapeHTML(entry.name);
    h += `<tr><td>${i + 1}</td><td>${nameCell}</td><td>${escapeHTML(entry.topic || '—')}</td><td>${entry.score} / ${entry.maxScore}</td><td>${entry.pct}%</td><td>${escapeHTML(entry.date)}</td></tr>`;
  });
  h += '</tbody></table>';
  if (area) area.innerHTML = h;
  if (modalArea) modalArea.innerHTML = h;
}

document.getElementById('leaderboardSearchInput')?.addEventListener('input', (e) => {
  leaderboardSearchQuery = e.target.value;
  const modalInput = document.getElementById('modalLeaderboardSearchInput');
  if (modalInput && modalInput.value !== e.target.value) modalInput.value = e.target.value;
  renderLeaderboard();
});

document.getElementById('modalLeaderboardSearchInput')?.addEventListener('input', (e) => {
  leaderboardSearchQuery = e.target.value;
  const mainInput = document.getElementById('leaderboardSearchInput');
  if (mainInput && mainInput.value !== e.target.value) mainInput.value = e.target.value;
  renderLeaderboard();
});

const CLEAR_LEADERBOARD_PASSWORD = "iamatomic";

function clearLeaderboardWithPassword() {
  const pass = prompt('Enter password to clear leaderboard:');
  if (pass === null) return; // user cancelled prompt
  if (pass.trim() === CLEAR_LEADERBOARD_PASSWORD) {
    if (confirm('Clear the entire leaderboard? This removes every recorded student score and cannot be undone.')) {
      if (isFirebaseConfigured && dbRef) {
        dbRef.remove();
      } else {
        leaderboard = [];
        saveLeaderboard();
        renderLeaderboard();
      }
      alert('Leaderboard cleared successfully.');
    }
  } else {
    alert('Incorrect password! Leaderboard was not cleared.');
  }
}

document.getElementById('clearLeaderboardBtn')?.addEventListener('click', clearLeaderboardWithPassword);
document.getElementById('modalClearLeaderboardBtn')?.addEventListener('click', clearLeaderboardWithPassword);

function openLeaderboardModal() {
  renderLeaderboard();
  document.getElementById('leaderboardModalOverlay')?.classList.add('show');
}

function closeLeaderboardModal() {
  document.getElementById('leaderboardModalOverlay')?.classList.remove('show');
}

document.getElementById('modalLeaderboardBtn')?.addEventListener('click', openLeaderboardModal);
document.getElementById('nextStudentLeaderboardBtn')?.addEventListener('click', openLeaderboardModal);
document.getElementById('closeLeaderboardModalBtn')?.addEventListener('click', closeLeaderboardModal);
document.getElementById('modalLeaderboardCloseBtn')?.addEventListener('click', closeLeaderboardModal);

/* ============================= REPLAY PLAYBACK ENGINE ============================= */
function openReplayModal(idx) {
  if (idx < 0 || idx >= leaderboard.length) return;
  replayActiveEntry = leaderboard[idx];
  if (!replayActiveEntry.history || replayActiveEntry.history.length === 0) {
    replayActiveEntry.history = [
      { t: 0, val: '' },
      { t: 1500, val: replayActiveEntry.submittedQuery || '' }
    ];
  }

  document.getElementById('replayStudentName').textContent = replayActiveEntry.name;
  document.getElementById('replayScore').textContent = `${replayActiveEntry.score} / ${replayActiveEntry.maxScore}`;
  document.getElementById('replayQuestionTopic').textContent = replayActiveEntry.topic;
  document.getElementById('replayQuestionText').textContent = replayActiveEntry.questionText || 'SQL Question Replay';

  replayIndex = 0;
  pauseReplay();

  document.getElementById('replayModalOverlay').classList.add('show');
  renderReplayFrame(0);
  playReplay();
}

function closeReplayModal() {
  pauseReplay();
  document.getElementById('replayModalOverlay').classList.remove('show');
}

function renderReplayFrame(index) {
  if (!replayActiveEntry || !replayActiveEntry.history) return;
  const history = replayActiveEntry.history;
  if (index < 0) index = 0;
  if (index >= history.length) index = history.length - 1;
  replayIndex = index;

  const currentStep = history[index];
  const prevStep = index > 0 ? history[index - 1] : { val: '' };

  const codeEl = document.getElementById('replayCodeHighlight');
  const badgeEl = document.getElementById('replayActionBadge');
  const timeEl = document.getElementById('replayTimeDisplay');
  const scrubberEl = document.getElementById('replayScrubber');

  codeEl.innerHTML = highlightSQL(currentStep.val) || '';

  if (index === 0) {
    badgeEl.textContent = 'START';
    badgeEl.style.color = 'var(--cyan)';
  } else if (index === history.length - 1) {
    badgeEl.textContent = 'SUBMITTED';
    badgeEl.style.color = 'var(--green)';
  } else if (currentStep.val.length < prevStep.val.length) {
    badgeEl.textContent = 'ERASING';
    badgeEl.style.color = 'var(--red)';
  } else if (currentStep.val === '') {
    badgeEl.textContent = 'CLEARED';
    badgeEl.style.color = 'var(--amber)';
  } else {
    badgeEl.textContent = 'TYPING';
    badgeEl.style.color = 'var(--green)';
  }

  const maxTime = history[history.length - 1].t || 1000;
  const curTime = currentStep.t || 0;
  const pct = maxTime > 0 ? Math.round((curTime / maxTime) * 100) : 100;

  scrubberEl.value = pct;

  const formatSec = (ms) => {
    const s = Math.floor(ms / 1000);
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m}:${String(sec).padStart(2, '0')}`;
  };
  timeEl.textContent = `${formatSec(curTime)} / ${formatSec(maxTime)}`;
}

function playReplay() {
  pauseReplay();
  if (!replayActiveEntry || !replayActiveEntry.history) return;
  isReplaying = true;
  document.getElementById('replayPlayBtn').textContent = '❚❚ Pause';

  const history = replayActiveEntry.history;
  if (replayIndex >= history.length - 1) {
    replayIndex = 0;
  }

  const step = () => {
    if (!isReplaying) return;
    if (replayIndex >= history.length - 1) {
      pauseReplay();
      return;
    }

    const cur = history[replayIndex];
    const next = history[replayIndex + 1];
    replayIndex++;
    renderReplayFrame(replayIndex);

    let delay = (next.t - cur.t) / replaySpeed;
    if (delay < 50) delay = 50;
    if (delay > 1500) delay = 1500;

    replayTimer = setTimeout(step, delay);
  };

  step();
}

function pauseReplay() {
  isReplaying = false;
  if (replayTimer) { clearTimeout(replayTimer); replayTimer = null; }
  const btn = document.getElementById('replayPlayBtn');
  if (btn) btn.textContent = '▶ Play';
}

document.getElementById('replayPlayBtn')?.addEventListener('click', () => {
  if (isReplaying) pauseReplay(); else playReplay();
});

document.getElementById('replayResetBtn')?.addEventListener('click', () => {
  pauseReplay();
  renderReplayFrame(0);
});

document.getElementById('replaySpeedSelect')?.addEventListener('change', (e) => {
  replaySpeed = parseFloat(e.target.value) || 2;
});

document.getElementById('replayScrubber')?.addEventListener('input', (e) => {
  pauseReplay();
  if (!replayActiveEntry || !replayActiveEntry.history) return;
  const pct = parseFloat(e.target.value) / 100;
  const history = replayActiveEntry.history;
  const maxTime = history[history.length - 1].t || 1;
  const targetTime = pct * maxTime;

  let closestIdx = 0;
  for (let i = 0; i < history.length; i++) {
    if (history[i].t <= targetTime) closestIdx = i;
  }
  renderReplayFrame(closestIdx);
});

document.getElementById('closeReplayModalBtn')?.addEventListener('click', closeReplayModal);

document.getElementById('openScheduleModalBtn')?.addEventListener('click', promptExamScheduleSettings);
document.getElementById('closeExamScheduleModalBtn')?.addEventListener('click', closeScheduleModal);
document.getElementById('scheduleCancelBtn')?.addEventListener('click', closeScheduleModal);
document.getElementById('scheduleSaveBtn')?.addEventListener('click', saveScheduleFromModal);
document.getElementById('scheduleClearBtn')?.addEventListener('click', clearScheduleFromModal);

/* ============================= REFERENCE TABLES ============================= */
function renderReferenceTables(db) {
  const dept = db.exec("SELECT * FROM departments;")[0];
  const emp = db.exec("SELECT * FROM employees;")[0];
  document.getElementById('deptTable').innerHTML = tableHTML(dept.columns, dept.values);
  document.getElementById('empTable').innerHTML = tableHTML(emp.columns, emp.values);
}

function formatValue(v) {
  if (v === null || v === undefined) return '<span class="null">NULL</span>';
  if (typeof v === 'number') {
    return Number.isInteger(v) ? String(v) : v.toFixed(2);
  }
  return String(v).replace(/&/g, '&amp;').replace(/</g, '&lt;');
}

function tableHTML(columns, values) {
  if (!columns || columns.length === 0) return '';
  let h = '<table><thead><tr>';
  columns.forEach(c => h += `<th>${c}</th>`);
  h += '</tr></thead><tbody>';
  if (values.length === 0) {
    h += `<tr><td colspan="${columns.length}" style="color:var(--text-faint);font-style:italic;">no rows</td></tr>`;
  } else {
    values.forEach(row => {
      h += '<tr>';
      row.forEach(v => h += `<td>${formatValue(v)}</td>`);
      h += '</tr>';
    });
  }
  h += '</tbody></table>';
  return h;
}

/* ============================= DB HELPERS ============================= */
function freshDB() {
  return new SQL.Database(originalBytes.slice());
}

function normalizeQuotes(sqlText) {
  // Fixes SQL that breaks only because of curly/smart quotes introduced by
  // mobile keyboards, Word, or Notes auto-correct — not a real syntax error.
  return sqlText
    .replace(/[\u2018\u2019\u201A\u201B]/g, "'")
    .replace(/[\u201C\u201D\u201E\u201F]/g, '"');
}

function runSQL(db, sqlText) {
  try {
    const res = db.exec(normalizeQuotes(sqlText));
    return { ok: true, res };
  } catch (e) {
    return { ok: false, error: e.message };
  }
}

function lastResultSet(res) {
  if (!res || res.length === 0) return null;
  return res[res.length - 1];
}

function normalizeRows(resultSet) {
  if (!resultSet) return [];
  return resultSet.values.map(row => row.map(v => {
    if (typeof v === 'number') return Math.round(v * 100) / 100;
    return v;
  }));
}

function rowsEqual(a, b, orderMatters) {
  if (a.length !== b.length) return false;
  const A = a.map(r => JSON.stringify(r));
  const B = b.map(r => JSON.stringify(r));
  if (!orderMatters) { A.sort(); B.sort(); }
  for (let i = 0; i < A.length; i++) { if (A[i] !== B[i]) return false; }
  return true;
}

/* ============================= QUESTION FLOW ============================= */
function renderQuestion() {
  document.getElementById('qCategoryTitle').textContent = currentQ.type === 'dml' ? 'question — data modification' : 'question — retrieval';
  const tagsRow = document.getElementById('qTagsRow');
  tagsRow.innerHTML = currentQ.tags.map(t => `<span class="tag">${t}</span>`).join('');
  document.getElementById('qText').textContent = currentQ.text;
  document.getElementById('hintLine').textContent = '💡 ' + currentQ.hint;
  document.getElementById('hintLine').classList.remove('show', 'auto');
  document.getElementById('hintBtn').textContent = '💡 show hint';
}

/* ============================= TIMER ============================= */
// The timer does NOT start when the question appears — only once the student
// actually begins typing a query, so they get unread-limited time to read it first.
function resetTimerIdle() {
  stopTimer();
  remainingSeconds = TIME_LIMIT_SECONDS;
  const chip = document.getElementById('timerChip');
  chip.classList.remove('warn', 'expired');
  chip.textContent = '⏱ 2:00 (starts when you begin typing)';
}

function startTimer() {
  stopTimer();
  remainingSeconds = TIME_LIMIT_SECONDS;
  updateTimerDisplay();
  timerInterval = setInterval(() => {
    remainingSeconds -= 1;
    if (remainingSeconds <= 0) {
      remainingSeconds = 0;
      updateTimerDisplay();
      stopTimer();
      revealHintAuto();
      return;
    }
    updateTimerDisplay();
  }, 1000);
}

function stopTimer() {
  if (timerInterval) { clearInterval(timerInterval); timerInterval = null; }
}

function updateTimerDisplay() {
  const chip = document.getElementById('timerChip');
  if (!chip) return;
  const m = Math.floor(remainingSeconds / 60);
  const s = remainingSeconds % 60;
  chip.textContent = `⏱ ${m}:${String(s).padStart(2, '0')}`;
  chip.classList.remove('warn', 'expired');
  if (remainingSeconds === 0) chip.classList.add('expired');
  else if (remainingSeconds <= 30) chip.classList.add('warn');
}

function revealHintAuto() {
  const chip = document.getElementById('timerChip');
  if (chip) { chip.textContent = "⏱ time's up"; chip.classList.add('expired'); }
  if (!hintUsed) {
    hintUsed = true;
    const el = document.getElementById('hintLine');
    el.classList.add('show', 'auto');
    document.getElementById('hintBtn').textContent = '💡 hide hint';
  }
  livePreview();
}

/* ============================= SCORING MODEL ============================= */
// One student, one question, one attempt. Score is based on how close the
// submitted answer is to the correct result (partial credit), not just right/wrong:
//   no answer submitted           -> 0 points (handled separately, never graded)
//   any submitted attempt          -> scaled between 1 and the ceiling below,
//                                      proportional to how close the result is
//   ceiling = 50 if the hint was never used, 30 if it was (manual or timeout)
function calcPoints(similarity, hintUsedFlag) {
  const ceiling = hintUsedFlag ? REDUCED_MAX_PER_Q : MAX_PER_Q;
  const raw = 1 + Math.max(0, Math.min(1, similarity)) * (ceiling - 1);
  return Math.min(ceiling, Math.max(1, Math.round(raw)));
}

function updateScoreMeter(studentText) {
  const valEl = document.getElementById('scoreMeterVal');
  const fillEl = document.getElementById('scoreMeterFill');
  const capEl = document.getElementById('scoreMeterCaption');
  const maxEl = document.getElementById('scoreMeterMax');
  if (!valEl) return;
  const ceiling = hintUsed ? REDUCED_MAX_PER_Q : MAX_PER_Q;
  if (maxEl) maxEl.textContent = `points if submitted right now (out of ${ceiling})`;
  if (!studentText) {
    valEl.className = 'val tier-none';
    valEl.textContent = '—';
    fillEl.style.width = '0%';
    capEl.className = 'caption';
    capEl.textContent = '';
    return;
  }
  const result = gradeAnswer(studentText);
  const points = calcPoints(result.similarity, hintUsed);
  const pct = Math.round((points / ceiling) * 100);
  fillEl.style.width = pct + '%';
  let tier, capClass, capText;
  if (result.similarity >= 0.999) { tier = 'tier-full'; capClass = 'full'; capText = hintUsed ? 'exact match — capped by hint use' : 'exact match — full credit'; }
  else if (result.similarity >= 0.5) { tier = 'tier-high'; capClass = 'high'; capText = 'close — partial credit'; }
  else if (result.similarity > 0) { tier = 'tier-mid'; capClass = 'mid'; capText = 'some overlap — partial credit'; }
  else { tier = 'tier-low'; capClass = 'low'; capText = 'not matching yet'; }
  valEl.className = 'val ' + tier;
  valEl.textContent = points;
  capEl.className = 'caption ' + capClass;
  capEl.textContent = capText;
}

function resetEditorAndResults() {
  document.getElementById('queryInput').value = '';
  document.getElementById('queryInput').disabled = false;
  document.getElementById('resultArea').innerHTML = '<div class="empty-msg">Start typing a query to see live results…</div>';
  document.getElementById('rowCount').style.display = 'none';
  setStatus('idle');
  const fb = document.getElementById('feedbackBox');
  fb.classList.remove('show', 'correct', 'wrong');
  document.getElementById('submitBtn').disabled = false;
  document.getElementById('hintBtn').disabled = false;
  document.getElementById('queryInput').focus();
  updateSubmitButtonMode(false);
  updateScoreMeter('');
  updateHighlight(); // clear the highlight layer
}

function setStatus(state, label) {
  const dot = document.getElementById('statusDot');
  const txt = document.getElementById('statusText');
  const shell = document.querySelector('.editor-shell');
  dot.className = 'status-dot' + (state === 'ok' ? ' ok' : state === 'err' ? ' err' : '');
  txt.textContent = label || (state === 'ok' ? 'valid' : state === 'err' ? 'error' : 'idle');
  if (shell) shell.classList.toggle('valid', state === 'ok');
}

/* ============================= LIVE PREVIEW ============================= */
function updateSubmitButtonMode(hasText) {
  const btn = document.getElementById('submitBtn');
  if (btn.disabled) return; // turn already finished — leave it alone
  if (currentMode === 'practice') {
    // Practice mode has a dedicated Skip button, so Submit always just submits.
    btn.textContent = 'Submit Answer';
    btn.dataset.mode = 'submit';
    return;
  }
  if (hasText) {
    btn.textContent = 'Submit Answer';
    btn.dataset.mode = 'submit';
  } else {
    btn.textContent = 'Next Student (no answer = 0 pts)';
    btn.dataset.mode = 'skip';
  }
}

document.getElementById('tryAgainBtn').addEventListener('click', () => {
  // Practice mode: clear feedback and let user try again
  const fb = document.getElementById('feedbackBox');
  fb.classList.remove('show', 'correct', 'wrong', 'partial');
  document.getElementById('tryAgainBtn').style.display = 'none';
  document.getElementById('queryInput').focus();
});

document.getElementById('queryInput').addEventListener('input', () => {
  if (!timerStarted && currentMode === 'exam') { timerStarted = true; startTimer(); }
  if (turnStartTime > 0 && !turnSubmitted) {
    currentKeystrokeHistory.push({
      t: Date.now() - turnStartTime,
      val: document.getElementById('queryInput').value
    });
  }
  const hasText = document.getElementById('queryInput').value.trim().length > 0;
  updateSubmitButtonMode(hasText);
  updateHighlight();
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(livePreview, 350);
});
document.getElementById('queryInput').addEventListener('scroll', updateHighlight);
document.getElementById('queryInput').addEventListener('keydown', (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
    e.preventDefault();
    if (document.getElementById('submitBtn').dataset.mode === 'skip') submitNoAnswer(); else submitAnswer();
  }
});

function livePreview() {
  const text = document.getElementById('queryInput').value.trim();
  const resultArea = document.getElementById('resultArea');
  const rowCountEl = document.getElementById('rowCount');
  updateScoreMeter(text);
  if (!text) {
    resultArea.innerHTML = '<div class="empty-msg">Start typing a query to see live results…</div>';
    rowCountEl.style.display = 'none';
    setStatus('idle');
    return;
  }
  const db = freshDB();
  const run = runSQL(db, text);
  if (!run.ok) {
    resultArea.innerHTML = `<div class="err-msg">⚠ ${escapeHTML(run.error)}</div>`;
    rowCountEl.style.display = 'none';
    setStatus('err');
    db.close();
    return;
  }
  let displaySet;
  let isInsertDiff = false;
  if (currentQ.type === 'dml') {
    const dump = runSQL(db, `SELECT * FROM ${currentQ.table} ORDER BY ${currentQ.pk};`);
    const full = lastResultSet(dump.res);
    if (currentQ.tags.includes('INSERT') && full) {
      // Show only the row(s) that weren't in the original snapshot — the actual inserted data.
      isInsertDiff = true;
      const pkIdx = full.columns.indexOf(currentQ.pk);
      const origSet = ORIGINAL_PKS[currentQ.table];
      const newRows = full.values.filter(row => !origSet.has(row[pkIdx]));
      displaySet = { columns: full.columns, values: newRows };
    } else {
      displaySet = full;
    }
  } else {
    displaySet = lastResultSet(run.res);
  }
  const label = isInsertDiff ? '<div class="insert-label">newly inserted row(s)</div>' : '';
  if (!displaySet || displaySet.values.length === 0) {
    resultArea.innerHTML = label + `<div class="empty-msg">${isInsertDiff ? 'No new row detected yet.' : 'Statement executed — no rows returned. (Did the question ask for a SELECT?)'}</div>`;
    rowCountEl.style.display = 'none';
  } else {
    resultArea.innerHTML = label + tableHTML(displaySet.columns, displaySet.values);
    rowCountEl.style.display = 'block';
    rowCountEl.textContent = `(${displaySet.values.length} row${displaySet.values.length === 1 ? '' : 's'})`;
  }
  setStatus('ok');
  db.close();
}

function escapeHTML(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }

/* ============================= SQL SYNTAX HIGHLIGHTER ============================= */
const SQL_KEYWORDS = new Set([
  'SELECT', 'FROM', 'WHERE', 'INSERT', 'INTO', 'VALUES', 'UPDATE', 'SET',
  'DELETE', 'JOIN', 'LEFT', 'RIGHT', 'INNER', 'OUTER', 'FULL', 'CROSS',
  'ON', 'AS', 'AND', 'OR', 'NOT', 'IN', 'LIKE', 'BETWEEN', 'IS', 'NULL',
  'GROUP', 'BY', 'ORDER', 'HAVING', 'LIMIT', 'OFFSET', 'DISTINCT', 'ALL',
  'CASE', 'WHEN', 'THEN', 'ELSE', 'END', 'EXISTS', 'UNION', 'INTERSECT',
  'EXCEPT', 'CREATE', 'TABLE', 'DROP', 'ALTER', 'ADD', 'COLUMN', 'PRIMARY',
  'KEY', 'FOREIGN', 'REFERENCES', 'INDEX', 'CONSTRAINT', 'DEFAULT',
  'UNIQUE', 'CHECK', 'ASC', 'DESC', 'WITH', 'RECURSIVE'
]);
const SQL_FUNCTIONS = new Set([
  'COUNT', 'SUM', 'AVG', 'MIN', 'MAX', 'COALESCE', 'NULLIF', 'IFNULL',
  'CAST', 'TYPEOF', 'LENGTH', 'SUBSTR', 'SUBSTRING', 'UPPER', 'LOWER',
  'TRIM', 'LTRIM', 'RTRIM', 'REPLACE', 'INSTR', 'ROUND', 'ABS', 'CEIL',
  'FLOOR', 'MOD', 'DATE', 'TIME', 'DATETIME', 'STRFTIME', 'NOW', 'ISNULL'
]);

function highlightSQL(text) {
  if (!text) return '';
  const TOKEN = /(--.*)|(\/\*[\s\S]*?\*\/)|('(?:''|[^'])*')|("(?:""|[^"])*")|((?:\d+\.?\d*)|(?:\.\d+))|([a-zA-Z_]\w*)|([*\/+\-<>=!%&|^~,;.()\[\]{}?:])|([ \t\r\n]+)/g;
  let out = '';
  let m;
  TOKEN.lastIndex = 0;
  while ((m = TOKEN.exec(text)) !== null) {
    const [full, lineComment, blockComment, singleStr, dblStr, num, ident, op, ws] = m;
    if (lineComment || blockComment) {
      out += `<span style="color:var(--text-faint)">${escapeHTML(full)}</span>`;
    } else if (singleStr || dblStr) {
      out += `<span style="color:var(--amber)">${escapeHTML(full)}</span>`;
    } else if (num) {
      out += `<span style="color:var(--green)">${escapeHTML(full)}</span>`;
    } else if (ident) {
      const upper = full.toUpperCase();
      if (SQL_KEYWORDS.has(upper)) {
        out += `<span style="color:var(--cyan);font-weight:600">${escapeHTML(full)}</span>`;
      } else if (SQL_FUNCTIONS.has(upper)) {
        out += `<span style="color:var(--violet)">${escapeHTML(full)}</span>`;
      } else {
        out += `<span style="color:var(--text)">${escapeHTML(full)}</span>`;
      }
    } else if (op) {
      out += `<span style="color:var(--text-dim)">${escapeHTML(full)}</span>`;
    } else {
      out += escapeHTML(full);
    }
  }
  return out;
}

function updateHighlight() {
  const ta = document.getElementById('queryInput');
  const hl = document.getElementById('sqlHighlight');
  if (!ta || !hl) return;
  hl.innerHTML = highlightSQL(ta.value) || '';
  hl.scrollTop = ta.scrollTop;
}


/* ============================= SIMILARITY SCORING ============================= */
// Row-set similarity for SELECT/JOIN/GROUP BY questions: counts how many expected
// rows appear in the student's result (as a multiset), penalizing both missing
// and extra rows. Returns a value in [0,1].
function rowSimilarity(expectedRows, actualRows, orderMatters) {
  if (expectedRows.length === 0 && actualRows.length === 0) return 1;
  const expStrs = expectedRows.map(r => JSON.stringify(r));
  const actStrs = actualRows.map(r => JSON.stringify(r));
  const remaining = {};
  expStrs.forEach(s => { remaining[s] = (remaining[s] || 0) + 1; });
  let matched = 0;
  actStrs.forEach(s => {
    if (remaining[s] > 0) { matched++; remaining[s]--; }
  });
  const denom = Math.max(expStrs.length, actStrs.length, 1);
  let sim = matched / denom;

  if (orderMatters && matched === expStrs.length && actStrs.length === expStrs.length) {
    let orderMatches = 0;
    for (let i = 0; i < expStrs.length; i++) { if (expStrs[i] === actStrs[i]) orderMatches++; }
    const orderScore = expStrs.length ? orderMatches / expStrs.length : 1;
    sim = 0.7 * sim + 0.3 * orderScore;
  }
  return Math.max(0, Math.min(1, sim));
}

// Cell-level similarity for INSERT/UPDATE/DELETE: for every row that the canonical
// query was supposed to touch (added, changed, or removed), checks how many of the
// student's cell values match — so a near-right UPDATE still earns partial credit.
function tableSimilarity(originalRows, canonicalRows, studentRows, pkIdx) {
  const origByPk = new Map(originalRows.map(r => [r[pkIdx], r]));
  const canonByPk = new Map(canonicalRows.map(r => [r[pkIdx], r]));
  const studByPk = new Map(studentRows.map(r => [r[pkIdx], r]));
  const allPks = new Set([...origByPk.keys(), ...canonByPk.keys(), ...studByPk.keys()]);

  let totalCells = 0, matchedCells = 0;
  allPks.forEach(pk => {
    const canon = canonByPk.get(pk);
    const stud = studByPk.get(pk);
    if (canon === undefined) {
      // this row should no longer exist (deleted, or never existed)
      totalCells += 1;
      if (stud === undefined) matchedCells += 1;
      return;
    }
    if (stud === undefined) {
      totalCells += canon.length; // row entirely missing when it should exist
      return;
    }
    totalCells += canon.length;
    canon.forEach((val, i) => {
      const nv = typeof val === 'number' ? Math.round(val * 100) / 100 : val;
      const sv = typeof stud[i] === 'number' ? Math.round(stud[i] * 100) / 100 : stud[i];
      if (nv === sv) matchedCells++;
    });
  });
  return totalCells === 0 ? 1 : matchedCells / totalCells;
}

/* ============================= GRADING ============================= */
function gradeAnswer(studentSQLText) {
  const dbA = freshDB(); // canonical
  const dbB = freshDB(); // student

  const canonicalRun = runSQL(dbA, currentQ.sql);
  const studentRun = runSQL(dbB, studentSQLText);

  if (!studentRun.ok) {
    dbA.close(); dbB.close();
    return { correct: false, similarity: 0, reason: studentRun.error };
  }

  let similarity;
  if (currentQ.type === 'select') {
    const expected = normalizeRows(lastResultSet(canonicalRun.res));
    const actual = normalizeRows(lastResultSet(studentRun.res));
    similarity = rowSimilarity(expected, actual, currentQ.orderMatters);
  } else {
    const canonDump = runSQL(dbA, `SELECT * FROM ${currentQ.table};`);
    const studDump = runSQL(dbB, `SELECT * FROM ${currentQ.table};`);
    const origSet = ORIGINAL_TABLE_ROWS[currentQ.table];
    const pkIdx = origSet.columns.indexOf(currentQ.pk);
    similarity = tableSimilarity(
      origSet.values,
      (lastResultSet(canonDump.res) || { values: [] }).values,
      (lastResultSet(studDump.res) || { values: [] }).values,
      pkIdx
    );
  }

  dbA.close(); dbB.close();
  const correct = similarity >= 0.999;
  const reason = correct ? null : (similarity > 0 ? 'Close, but not an exact match to the expected result.' : 'Result does not match the expected outcome.');
  return { correct, similarity, reason };
}

/* ============================= SUBMIT / SKIP / HINT ============================= */
document.getElementById('submitBtn').addEventListener('click', () => {
  const mode = document.getElementById('submitBtn').dataset.mode;
  if (mode === 'skip') submitNoAnswer(); else submitAnswer();
});
document.getElementById('skipBtn').addEventListener('click', () => {
  if (turnSubmitted) return;
  submitNoAnswer(); // practice mode: skip straight to the next question, no penalty
});
document.getElementById('clearBtn').addEventListener('click', () => {
  document.getElementById('queryInput').value = '';
  if (turnStartTime > 0 && !turnSubmitted) {
    currentKeystrokeHistory.push({
      t: Date.now() - turnStartTime,
      val: ''
    });
  }
  updateSubmitButtonMode(false);
  livePreview();
});
document.getElementById('hintBtn').addEventListener('click', () => {
  const el = document.getElementById('hintLine');
  const willShow = !el.classList.contains('show');
  el.classList.toggle('show');
  document.getElementById('hintBtn').textContent = el.classList.contains('show') ? '💡 hide hint' : '💡 show hint';
  if (willShow) hintUsed = true; // using the hint caps this question's score, whether revealed manually or by the timer
  livePreview();
});


function submitAnswer() {
  if (turnSubmitted) return;
  const text = document.getElementById('queryInput').value.trim();
  if (!text) { submitNoAnswer(); return; }

  const fb = document.getElementById('feedbackBox');
  const main = document.getElementById('feedbackMain');
  const sub = document.getElementById('feedbackSub');
  const actions = document.getElementById('feedbackActions');

  const result = gradeAnswer(text);

  /* ---- PRACTICE MODE ---- */
  if (currentMode === 'practice') {
    practiceAttempts++;
    if (result.similarity >= 0.999) {
      fb.className = 'feedback show correct';
      main.textContent = `✔ Correct! Perfect SQL in ${practiceAttempts} attempt${practiceAttempts === 1 ? '' : 's'}.`;
      sub.textContent = 'Great work! You can try a new question or practice another.';
      actions.innerHTML = '';
      const nextQ = document.createElement('button');
      nextQ.className = 'primary';
      nextQ.textContent = '→ Next Question';
      nextQ.onclick = () => {
        pool.length === 0 ? showBankExhausted() : beginStudentTurn();
        fb.classList.remove('show', 'correct', 'wrong', 'partial');
        document.getElementById('tryAgainBtn').style.display = 'none';
      };
      actions.appendChild(nextQ);
      const changeStudent = document.createElement('button');
      changeStudent.className = 'secondary';
      changeStudent.textContent = 'New Student';
      changeStudent.onclick = () => { promptNewStudent(); };
      actions.appendChild(changeStudent);
      document.getElementById('tryAgainBtn').style.display = 'none';
      // Lock editor after correct in practice
      document.getElementById('queryInput').disabled = true;
      document.getElementById('submitBtn').disabled = true;
    } else {
      // Wrong/partial in practice → show feedback but allow retry
      if (result.similarity > 0) {
        fb.className = 'feedback show partial';
        main.textContent = `◐ Partially correct — attempt ${practiceAttempts}`;
        sub.textContent = `Your result is about ${Math.round(result.similarity * 100)}% of the way there. Keep trying!`;
      } else {
        fb.className = 'feedback show wrong';
        main.textContent = `✘ Not matching yet — attempt ${practiceAttempts}`;
        sub.textContent = result.reason ? (result.reason.length > 140 ? result.reason.slice(0, 140) + '…' : result.reason) : 'Result does not match the expected outcome. Try again!';
      }
      actions.innerHTML = '';
      // Let the student move on even without getting it right.
      const nextAnyway = document.createElement('button');
      nextAnyway.className = 'secondary';
      nextAnyway.textContent = '→ Next Question';
      nextAnyway.onclick = () => {
        pool.length === 0 ? showBankExhausted() : beginStudentTurn();
        fb.classList.remove('show', 'correct', 'wrong', 'partial');
        document.getElementById('tryAgainBtn').style.display = 'none';
      };
      actions.appendChild(nextAnyway);
      // Show Try Again button in header too
      document.getElementById('tryAgainBtn').style.display = 'inline-block';
    }
    livePreview();
    return;
  }

  /* ---- EXAM MODE ---- */
  const ceiling = hintUsed ? REDUCED_MAX_PER_Q : MAX_PER_Q;
  const points = calcPoints(result.similarity, hintUsed);

  stopTimer();
  turnSubmitted = true;
  lastScore = points;
  addToLeaderboard(studentName, points, MAX_PER_Q, currentQ);

  if (result.similarity >= 0.999) {
    fb.className = 'feedback show correct';
    main.textContent = `✔ Correct! +${points} pts`;
    sub.textContent = hintUsed
      ? `Hint was used, so this is capped at a maximum of ${REDUCED_MAX_PER_Q}/${MAX_PER_Q} (${points}/${MAX_PER_Q}).`
      : `Exact match — full credit (${points}/${MAX_PER_Q}).`;
  } else if (result.similarity > 0) {
    fb.className = 'feedback show partial';
    main.textContent = `◐ Partially correct — +${points} pts`;
    sub.textContent = `Your result is about ${Math.round(result.similarity * 100)}% of the way there (max for this attempt was ${ceiling}/${MAX_PER_Q}).`;
  } else {
    fb.className = 'feedback show wrong';
    main.textContent = `✘ Not matching — +${points} pt${points === 1 ? '' : 's'}`;
    sub.textContent = result.reason ? (result.reason.length > 140 ? result.reason.slice(0, 140) + '…' : result.reason) : 'Result does not match the expected outcome.';
  }

  actions.innerHTML = '';
  const nextBtn = document.createElement('button');
  nextBtn.className = 'primary';
  nextBtn.textContent = 'Continue → Next Student';
  nextBtn.onclick = () => { promptNewStudent(); };
  actions.appendChild(nextBtn);

  // Lock the editor — this student's single attempt is done.
  document.getElementById('queryInput').disabled = true;
  document.getElementById('submitBtn').disabled = true;
  document.getElementById('hintBtn').disabled = true;

  livePreview();
  updateHud();
}

function submitNoAnswer() {
  if (turnSubmitted) return;
  if (currentMode === 'practice') {
    // In practice mode, skip means go to next question (same student)
    if (pool.length === 0) { showBankExhausted(); return; }
    beginStudentTurn();
    return;
  }
  stopTimer();
  turnSubmitted = true;
  lastScore = 0;
  addToLeaderboard(studentName, 0, MAX_PER_Q, currentQ);
  updateHud();
  promptNewStudent();
}

/* ============================= HUD / SCORE ============================= */
function updateHud() {
  const used = QUESTIONS.length - pool.length;
  document.getElementById('progressLabel').textContent = `${used} / ${QUESTIONS.length}`;
  document.getElementById('progressFill').style.width = `${(used / QUESTIONS.length) * 100}%`;
  document.getElementById('scoreLabel').textContent = lastScore === null ? '—' : `${lastScore} / ${MAX_PER_Q}`;
}