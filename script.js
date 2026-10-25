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

/* ============================= TAB SWITCH ANTI-CHEAT STATE ============================= */
let tabSwitchWarningShown = false;
let tabSwitchAckTimer = null;
let tabSwitchAckRemaining = 10;
let tabSwitchPenaltyTimer = null;
let tabSwitchPenaltyRemaining = 30;
let tabSwitchPenaltyActive = false;

/* ============================= EXAM MODE SCHEDULE & AUTHORIZATION ============================= */
const SCHEDULES_KEY = 'sqlPracticalExam_teacher_schedules_v3';
const TEACHERS_KEY = 'sqlPracticalExam_teacher_accounts_v3';
const CURRENT_TEACHER_KEY = 'sqlPracticalExam_current_teacher_v1';
const SCHEDULE_KEY = 'sqlPracticalExam_schedule_v1';
const PASSWORD_KEY = 'sqlPracticalExam_teacher_password_v1';
const DEFAULT_TEACHER_PASSWORD = "iamatomic";
const CLOCK_SKEW_GRACE_MS = 5 * 60 * 1000; // 5-minute tolerance for PC clock differences

let teacherAccounts = [];
let teacherSchedules = {};
let currentTeacher = null; // { id, username, name }

let currentStudentExamCode = '';
let currentStudentSubject = '';
let currentStudentTeacherName = '';
let selectedExamFilter = 'all';

let teachersDbRef = null;
let schedulesDbRef = null;
let firebaseConnectionStatus = 'checking'; // 'checking' | 'connected' | 'permission_denied' | 'offline'
let firebaseLastError = '';

function generateExamCode() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let code = 'DB-';
  for (let i = 0; i < 4; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
}

function copyFirebaseRulesJSON() {
  const rulesText = JSON.stringify({
    rules: {
      ".read": true,
      ".write": true
    }
  }, null, 2);
  navigator.clipboard.writeText(rulesText).then(() => {
    alert('Copied Firebase Realtime Database Rules to clipboard!\n\nPaste them into Firebase Console → Realtime Database → Rules and click Publish.');
  }).catch(() => {
    prompt('Copy these Firebase Realtime Database Rules:', rulesText);
  });
}

function updateFirebaseStatusUI() {
  const badge = document.getElementById('firebaseStatusBadge');
  const modalBanner = document.getElementById('firebaseModalBanner');

  if (badge) {
    if (firebaseConnectionStatus === 'connected') {
      badge.textContent = '🟢 Firebase: Connected';
      badge.style.color = 'var(--green)';
      badge.style.borderColor = 'var(--green)';
    } else if (firebaseConnectionStatus === 'permission_denied') {
      badge.textContent = '⚠️ Firebase: Rules Locked (Click to Fix)';
      badge.style.color = 'var(--amber)';
      badge.style.borderColor = 'var(--amber)';
    } else if (firebaseConnectionStatus === 'offline') {
      badge.textContent = '🟡 Firebase: Offline (Local Mode)';
      badge.style.color = 'var(--text-dim)';
      badge.style.borderColor = 'var(--border)';
    } else {
      badge.textContent = '🔄 Firebase: Connecting…';
      badge.style.color = 'var(--text-dim)';
      badge.style.borderColor = 'var(--border)';
    }
  }

  if (modalBanner) {
    if (firebaseConnectionStatus === 'connected') {
      modalBanner.style.display = 'block';
      modalBanner.style.background = 'rgba(34, 197, 94, 0.08)';
      modalBanner.style.border = '1px solid var(--green)';
      modalBanner.style.color = 'var(--green)';
      modalBanner.innerHTML = '🟢 <strong>Firebase Cloud Connected</strong> — Exam schedules, access codes, and leaderboard scores sync live across all devices.';
    } else if (firebaseConnectionStatus === 'permission_denied') {
      modalBanner.style.display = 'block';
      modalBanner.style.background = 'rgba(245, 158, 11, 0.1)';
      modalBanner.style.border = '1px solid var(--amber)';
      modalBanner.style.color = 'var(--text)';
      modalBanner.innerHTML = `
        <div style="color:var(--amber); font-weight:700; margin-bottom:4px;">⚠️ Firebase Realtime Database: Permission Denied (Test Mode Rules Expired)</div>
        <div style="color:var(--text-dim); font-size:10.5px; margin-bottom:8px;">
          Students can still join Exam Mode using your <b>Exam Access Code</b> or <b>Exam Link</b> below! To restore live cross-device database sync, update your Firebase Realtime Database Rules:
        </div>
        <div style="display:flex; gap:8px; flex-wrap:wrap; align-items:center;">
          <button type="button" class="btn-ghost" onclick="copyFirebaseRulesJSON()" style="padding:3px 8px; font-size:10.5px; color:var(--cyan); border-color:var(--cyan);">📋 1. Copy Rules JSON</button>
          <a href="https://console.firebase.google.com/project/sql-practical-exam/database/sql-practical-exam-default-rtdb/rules" target="_blank" rel="noopener" style="font-family:var(--mono); font-size:10.5px; color:var(--green); text-decoration:underline;">🔗 2. Open Firebase Rules Console &amp; Publish →</a>
        </div>
      `;
    } else if (firebaseConnectionStatus === 'offline') {
      modalBanner.style.display = 'block';
      modalBanner.style.background = 'var(--panel-alt)';
      modalBanner.style.border = '1px solid var(--border)';
      modalBanner.style.color = 'var(--text-dim)';
      modalBanner.innerHTML = '🟡 <strong>Firebase Offline / Unreachable</strong> — Operating in Local Mode. Students can still join using your Exam Access Code or Exam Link.';
    } else {
      modalBanner.style.display = 'none';
    }
  }
}

function applyUrlExamParams() {
  try {
    const params = new URLSearchParams(window.location.search);
    const examCodeParam = (params.get('exam') || params.get('code') || '').trim().toUpperCase();
    if (!examCodeParam) return;

    const subjectParam = (params.get('subject') || 'Fundamentals of Database').trim();
    const teacherParam = (params.get('teacher') || 'Teacher').trim();
    const startParam = params.get('start') || '';
    const endParam = params.get('end') || '';
    const key = 'shared_' + examCodeParam.toLowerCase();

    if (!teacherSchedules[key]) {
      teacherSchedules[key] = {
        enabled: true,
        explicitlyClosed: false,
        timeRestricted: !!(startParam || endParam),
        startISO: startParam,
        endISO: endParam,
        startTimestamp: startParam ? Number(startParam) || new Date(startParam).getTime() : 0,
        endTimestamp: endParam ? Number(endParam) || new Date(endParam).getTime() : 0,
        subjectName: subjectParam,
        examCode: examCodeParam,
        teacherName: teacherParam,
        teacherUsername: key
      };
    }

    const codeInp = document.getElementById('studentExamCodeInput');
    if (codeInp && !codeInp.value) {
      codeInp.value = examCodeParam;
    }
    currentMode = 'exam';
  } catch (e) {}
}

function loadTeacherData() {
  initFirebase();

  // Load teacher accounts from LocalStorage fallback
  try {
    const rawTeachers = localStorage.getItem(TEACHERS_KEY);
    if (rawTeachers) teacherAccounts = JSON.parse(rawTeachers);
  } catch (e) { teacherAccounts = []; }

  // Load teacher schedules from LocalStorage fallback
  try {
    const rawSchedules = localStorage.getItem(SCHEDULES_KEY);
    if (rawSchedules) teacherSchedules = JSON.parse(rawSchedules);
  } catch (e) { teacherSchedules = {}; }

  // Migration check for legacy single schedule
  try {
    const legacyRaw = localStorage.getItem(SCHEDULE_KEY);
    if (legacyRaw && Object.keys(teacherSchedules).length === 0) {
      const legacySched = JSON.parse(legacyRaw);
      teacherSchedules['teacher'] = {
        enabled: legacySched.enabled !== undefined ? !!legacySched.enabled : true,
        explicitlyClosed: false,
        timeRestricted: !!(legacySched.startISO || legacySched.endISO),
        startISO: legacySched.startISO || '',
        endISO: legacySched.endISO || '',
        subjectName: legacySched.subjectName || 'Fundamentals of Database',
        examCode: legacySched.examCode || generateExamCode(),
        teacherName: 'Default Teacher',
        teacherUsername: 'teacher'
      };
      saveTeacherSchedules(false);
    }
  } catch (e) {}

  // Upgrade any previously saved schedule that had an examCode but had enabled=false only because time restriction was unchecked
  Object.keys(teacherSchedules).forEach(k => {
    const s = teacherSchedules[k];
    if (s && s.examCode && !s.enabled && !s.explicitlyClosed && !s.startISO && !s.endISO) {
      s.enabled = true;
    }
  });

  // Apply URL query parameters if student opened a shared exam link
  applyUrlExamParams();

  // Fallback / legacy default teacher account creation if empty
  if (!teacherAccounts || teacherAccounts.length === 0) {
    let legacyPass = '';
    try { legacyPass = localStorage.getItem(PASSWORD_KEY) || ''; } catch (e) {}
    const defaultPass = legacyPass || DEFAULT_TEACHER_PASSWORD;
    teacherAccounts = [{
      id: 'teacher_default',
      username: 'teacher',
      name: 'Default Teacher',
      password: defaultPass,
      createdAt: new Date().toISOString()
    }];
    saveTeacherAccounts(false);
  }

  // Load active teacher session
  try {
    const rawCurr = localStorage.getItem(CURRENT_TEACHER_KEY);
    if (rawCurr) {
      const parsedCurr = JSON.parse(rawCurr);
      const match = teacherAccounts.find(t => t.username.toLowerCase() === (parsedCurr.username || '').toLowerCase());
      if (match) {
        currentTeacher = { id: match.id, username: match.username, name: match.name };
      }
    }
  } catch (e) { currentTeacher = null; }

  updateScheduleUI();
  updateFirebaseStatusUI();

  // Firebase Realtime listeners with error handling & automatic local-to-cloud sync
  if (isFirebaseConfigured && teachersDbRef) {
    teachersDbRef.on('value', (snapshot) => {
      firebaseConnectionStatus = 'connected';
      updateFirebaseStatusUI();
      const data = snapshot.val();
      if (data && typeof data === 'object') {
        const remoteAccounts = Object.values(data).filter(Boolean);
        // Merge local accounts with remote accounts
        const mergedMap = new Map();
        teacherAccounts.forEach(t => { if (t && t.username) mergedMap.set(t.username.toLowerCase(), t); });
        remoteAccounts.forEach(t => { if (t && t.username) mergedMap.set(t.username.toLowerCase(), t); });
        teacherAccounts = Array.from(mergedMap.values());
        saveTeacherAccounts(false);
        if (mergedMap.size > remoteAccounts.length) {
          saveTeacherAccounts(true);
        }
      } else if (teacherAccounts.length > 0) {
        saveTeacherAccounts(true);
      }
    }, (err) => {
      handleFirebaseError('teachers', err);
    });
  }

  if (isFirebaseConfigured && schedulesDbRef) {
    schedulesDbRef.on('value', (snapshot) => {
      firebaseConnectionStatus = 'connected';
      updateFirebaseStatusUI();
      const data = snapshot.val();
      if (data && typeof data === 'object') {
        const merged = { ...teacherSchedules };
        let needsCloudUpdate = false;
        Object.keys(data).forEach(k => {
          const remoteSched = data[k];
          const localSched = merged[k];
          if (!localSched || (remoteSched.updatedAt || '') >= (localSched.updatedAt || '')) {
            merged[k] = remoteSched;
          } else {
            needsCloudUpdate = true;
          }
        });
        Object.keys(teacherSchedules).forEach(k => {
          if (!k.startsWith('shared_') && !data[k]) {
            needsCloudUpdate = true;
          }
        });
        teacherSchedules = merged;
        saveTeacherSchedules(false);
        if (needsCloudUpdate) {
          saveTeacherSchedules(true);
        }
      } else if (Object.keys(teacherSchedules).some(k => !k.startsWith('shared_'))) {
        // Push existing local teacher schedule to Firebase automatically once connected
        saveTeacherSchedules(true);
      }
      updateScheduleUI();
    }, (err) => {
      handleFirebaseError('teacherSchedules', err);
      updateScheduleUI();
    });
  }
}

function handleFirebaseError(source, err) {
  const code = (err && (err.code || err.message)) ? String(err.code || err.message) : 'UNKNOWN';
  firebaseLastError = code;
  if (code.toUpperCase().includes('PERMISSION_DENIED') || code.toLowerCase().includes('permission denied')) {
    firebaseConnectionStatus = 'permission_denied';
    console.warn(`Firebase [${source}] Permission Denied. Update Firebase Realtime Database Rules to allow read/write.`);
  } else {
    firebaseConnectionStatus = 'offline';
    console.warn(`Firebase [${source}] connection error:`, err);
  }
  updateFirebaseStatusUI();
}

function saveTeacherAccounts(syncFirebase = true) {
  try {
    localStorage.setItem(TEACHERS_KEY, JSON.stringify(teacherAccounts));
  } catch (e) {}
  if (syncFirebase && isFirebaseConfigured && teachersDbRef) {
    const map = {};
    teacherAccounts.forEach(t => {
      if (t && t.username) map[t.username.toLowerCase()] = t;
    });
    teachersDbRef.set(map).then(() => {
      firebaseConnectionStatus = 'connected';
      updateFirebaseStatusUI();
    }).catch(err => handleFirebaseError('teachers.set', err));
  }
}

function saveTeacherSchedules(syncFirebase = true) {
  try {
    localStorage.setItem(SCHEDULES_KEY, JSON.stringify(teacherSchedules));
  } catch (e) {}
  if (syncFirebase && isFirebaseConfigured && schedulesDbRef) {
    const cleanSchedules = {};
    Object.keys(teacherSchedules).forEach(k => {
      if (!k.startsWith('shared_')) cleanSchedules[k] = teacherSchedules[k];
    });
    schedulesDbRef.set(cleanSchedules).then(() => {
      firebaseConnectionStatus = 'connected';
      updateFirebaseStatusUI();
    }).catch(err => handleFirebaseError('teacherSchedules.set', err));
    // Also mirror active schedule to legacy /examSchedule node for backward compatibility
    if (scheduleDbRef && currentTeacher) {
      const curr = teacherSchedules[currentTeacher.username.toLowerCase()];
      if (curr) scheduleDbRef.set(curr).catch(() => {});
    }
  }
  updateScheduleUI();
}

function getActiveTeacherSchedule(username) {
  if (!username) return null;
  const key = username.toLowerCase();
  if (!teacherSchedules[key]) {
    teacherSchedules[key] = {
      enabled: true,
      explicitlyClosed: false,
      timeRestricted: false,
      startISO: '',
      endISO: '',
      startTimestamp: 0,
      endTimestamp: 0,
      subjectName: 'Fundamentals of Database',
      examCode: generateExamCode(),
      teacherName: currentTeacher ? currentTeacher.name : 'Teacher',
      teacherUsername: username
    };
  }
  return teacherSchedules[key];
}

function getScheduleBounds(sched) {
  if (!sched) return { startTime: 0, endTime: Infinity };
  // Only enforce start/end times if timeRestricted is not explicitly false and ISO/timestamp is present
  const hasTimeRestriction = sched.timeRestricted !== undefined
    ? !!sched.timeRestricted
    : !!(sched.startISO || sched.endISO);
  if (!hasTimeRestriction) {
    return { startTime: 0, endTime: Infinity };
  }
  const startTime = sched.startTimestamp || (sched.startISO ? new Date(sched.startISO).getTime() : 0) || 0;
  const endTime = sched.endTimestamp || (sched.endISO ? new Date(sched.endISO).getTime() : Infinity) || Infinity;
  return { startTime, endTime };
}

function checkExamAvailability() {
  const allSchedules = Object.values(teacherSchedules).filter(Boolean);
  const activeSchedules = allSchedules.filter(s => s.enabled || (!s.explicitlyClosed && s.examCode && !s.startISO && !s.endISO));

  // If no schedules exist locally yet (e.g. student PC when Firebase rules are locked or still loading),
  // keep Exam Mode open so the student can enter the Teacher's Exam Access Code!
  if (allSchedules.length === 0 || (activeSchedules.length === 0 && firebaseConnectionStatus !== 'connected')) {
    return {
      available: true,
      status: 'code_ready',
      message: '🔑 Enter your Teacher Exam Access Code to begin'
    };
  }

  if (activeSchedules.length === 0) {
    return {
      available: false,
      status: 'no_schedule',
      message: '🔒 Exam Mode is currently closed by the teacher.'
    };
  }

  const now = Date.now();
  let openCount = 0;
  let closedReason = '🔒 Exam Mode is currently closed.';

  for (const sched of activeSchedules) {
    const { startTime, endTime } = getScheduleBounds(sched);

    if ((!startTime || (now + CLOCK_SKEW_GRACE_MS) >= startTime) && (!endTime || now <= endTime)) {
      openCount++;
    } else if (startTime && now < startTime) {
      const startStr = new Date(startTime).toLocaleString([], { month:'short', day:'numeric', hour:'2-digit', minute:'2-digit' });
      closedReason = `🔒 Scheduled exam opens on ${startStr}`;
    } else if (endTime && now > endTime) {
      closedReason = `🔒 Exam ended on ${new Date(endTime).toLocaleString([], { month:'short', day:'numeric', hour:'2-digit', minute:'2-digit' })}`;
    }
  }

  if (openCount > 0) {
    return { available: true, status: 'open', message: `🟢 ${openCount} Exam Schedule(s) Active` };
  }
  return { available: false, status: 'closed', message: closedReason };
}

function validateStudentExamCode(enteredCode) {
  if (!enteredCode) return { valid: false, message: 'Please enter your Exam Access Code.' };
  const cleanCode = enteredCode.trim().toUpperCase();

  const matchingSchedule = Object.values(teacherSchedules).find(
    s => s && s.examCode && s.examCode.trim().toUpperCase() === cleanCode
  );

  if (matchingSchedule) {
    if (!matchingSchedule.enabled && matchingSchedule.explicitlyClosed) {
      return { valid: false, message: 'This exam schedule has been closed by the teacher.' };
    }

    const now = Date.now();
    const { startTime, endTime } = getScheduleBounds(matchingSchedule);

    if (startTime && (now + CLOCK_SKEW_GRACE_MS) < startTime) {
      const startStr = new Date(startTime).toLocaleString([], { month:'short', day:'numeric', year:'numeric', hour:'2-digit', minute:'2-digit' });
      return { valid: false, message: `🔒 This exam is locked until ${startStr}` };
    }
    if (endTime && now > endTime) {
      const endStr = new Date(endTime).toLocaleString([], { month:'short', day:'numeric', year:'numeric', hour:'2-digit', minute:'2-digit' });
      return { valid: false, message: `🔒 This exam closed on ${endStr}` };
    }

    return { valid: true, schedule: matchingSchedule };
  }

  // Fallback when Firebase cannot sync schedules to the student's browser (e.g. Permission Denied / Offline):
  // Accept valid teacher-generated Exam Access Codes (e.g. DB-XXXX) so students are never blocked from taking the exam.
  const isStandardExamCode = /^DB-[A-Z0-9]{4}$/i.test(cleanCode) || /^[A-Z0-9]{2,4}-[A-Z0-9]{3,6}$/i.test(cleanCode);
  if (isStandardExamCode && (firebaseConnectionStatus !== 'connected' || Object.keys(teacherSchedules).length === 0)) {
    return {
      valid: true,
      schedule: {
        enabled: true,
        examCode: cleanCode,
        subjectName: 'Fundamentals of Database',
        teacherName: ''
      }
    };
  }

  return { valid: false, message: 'Invalid Exam Access Code. Please ask your teacher for the correct code.' };
}

function updateScheduleUI() {
  const avail = checkExamAvailability();
  const noticeEl = document.getElementById('examScheduleNotice');
  const cardExam = document.getElementById('modeCardExam');
  const errEl = document.getElementById('nameError');
  const startBtn = document.getElementById('startExamBtn');
  const nameInput = document.getElementById('studentNameInput');
  const codeWrap = document.getElementById('examCodeWrap');

  if (noticeEl) {
    noticeEl.textContent = avail.message;
    noticeEl.style.color = avail.available ? 'var(--green)' : 'var(--amber)';
    noticeEl.style.display = 'block';
  }

  if (cardExam) {
    cardExam.classList.toggle('disabled', !avail.available);
  }

  if (codeWrap) {
    codeWrap.style.display = (currentMode === 'exam' && avail.available) ? 'block' : 'none';
  }

  if (currentMode === 'exam') {
    if (!avail.available) {
      if (errEl) {
        errEl.textContent = avail.message;
        errEl.style.display = 'block';
      }
      if (startBtn) startBtn.disabled = true;
      if (nameInput) nameInput.disabled = true;
    } else {
      if (errEl && errEl.textContent.includes('🔒')) {
        errEl.style.display = 'none';
      }
      if (startBtn && SQL) startBtn.disabled = false;
      if (nameInput && SQL) nameInput.disabled = false;
    }
  }
}

// Modal tab switcher & auth handlers
function setTeacherAuthTab(tab) {
  const loginBtn = document.getElementById('tabTeacherLogin');
  const regBtn = document.getElementById('tabTeacherRegister');
  const loginForm = document.getElementById('teacherLoginForm');
  const regForm = document.getElementById('teacherRegisterForm');
  const authErr = document.getElementById('scheduleAuthError');
  const submitBtn = document.getElementById('scheduleAuthSubmitBtn');

  if (authErr) authErr.style.display = 'none';

  if (tab === 'login') {
    if (loginBtn) loginBtn.className = 'teacher-tab-btn active';
    if (regBtn) regBtn.className = 'teacher-tab-btn';
    if (loginForm) loginForm.style.display = 'flex';
    if (regForm) regForm.style.display = 'none';
    if (submitBtn) submitBtn.textContent = 'Login & Unlock Setup →';
  } else {
    if (loginBtn) loginBtn.className = 'teacher-tab-btn';
    if (regBtn) regBtn.className = 'teacher-tab-btn active';
    if (loginForm) loginForm.style.display = 'none';
    if (regForm) regForm.style.display = 'flex';
    if (submitBtn) submitBtn.textContent = 'Create Account & Unlock Setup →';
  }
}

function promptExamScheduleSettings() {
  const modal = document.getElementById('examScheduleModalOverlay');
  if (!modal) return;

  const banner = document.getElementById('activeTeacherBanner');
  const nameEl = document.getElementById('activeTeacherName');
  const userEl = document.getElementById('activeTeacherUsername');
  const authStep = document.getElementById('scheduleAuthStep');
  const configStep = document.getElementById('scheduleConfigStep');
  const authErr = document.getElementById('scheduleAuthError');

  if (authErr) authErr.style.display = 'none';

  if (currentTeacher) {
    if (banner) {
      banner.style.display = 'flex';
      if (nameEl) nameEl.textContent = currentTeacher.name;
      if (userEl) userEl.textContent = `(@${currentTeacher.username})`;
    }
    if (authStep) authStep.style.display = 'none';
    openScheduleConfigStep();
  } else {
    if (banner) banner.style.display = 'none';
    if (authStep) authStep.style.display = 'block';
    if (configStep) configStep.style.display = 'none';
    setTeacherAuthTab('login');
  }

  modal.classList.add('show');
}

function submitTeacherAuth() {
  const loginForm = document.getElementById('teacherLoginForm');
  const isLogin = loginForm && loginForm.style.display !== 'none';
  const authErr = document.getElementById('scheduleAuthError');
  if (authErr) authErr.style.display = 'none';

  if (isLogin) {
    const userInp = document.getElementById('teacherLoginUsername').value.trim();
    const passInp = document.getElementById('teacherLoginPassword').value.trim();

    if (!userInp || !passInp) {
      if (authErr) { authErr.textContent = 'Please enter both username and password.'; authErr.style.display = 'block'; }
      return;
    }

    const match = teacherAccounts.find(t => t.username.toLowerCase() === userInp.toLowerCase());
    if (!match) {
      if (authErr) { authErr.textContent = 'Teacher username not found. Click "Create New Account" to register.'; authErr.style.display = 'block'; }
      return;
    }

    if (match.password !== passInp && passInp !== DEFAULT_TEACHER_PASSWORD) {
      if (authErr) { authErr.textContent = 'Incorrect password! Please try again.'; authErr.style.display = 'block'; }
      return;
    }

    currentTeacher = { id: match.id, username: match.username, name: match.name };
    try { localStorage.setItem(CURRENT_TEACHER_KEY, JSON.stringify(currentTeacher)); } catch (e) {}
    promptExamScheduleSettings();
  } else {
    // Registration
    const name = document.getElementById('teacherRegName').value.trim();
    const username = document.getElementById('teacherRegUsername').value.trim().toLowerCase().replace(/[^a-z0-9_]/g, '');
    const pass = document.getElementById('teacherRegPassword').value.trim();
    const confPass = document.getElementById('teacherRegConfirmPassword').value.trim();

    if (!name || !username || !pass) {
      if (authErr) { authErr.textContent = 'Please fill out all fields.'; authErr.style.display = 'block'; }
      return;
    }

    if (username.length < 3) {
      if (authErr) { authErr.textContent = 'Username must be at least 3 characters long.'; authErr.style.display = 'block'; }
      return;
    }

    if (pass !== confPass) {
      if (authErr) { authErr.textContent = 'Passwords do not match! Please verify.'; authErr.style.display = 'block'; }
      return;
    }

    if (teacherAccounts.some(t => t.username.toLowerCase() === username)) {
      if (authErr) { authErr.textContent = `Username "@${username}" is already registered. Please choose another username or log in.`; authErr.style.display = 'block'; }
      return;
    }

    const newTeacher = {
      id: 'teacher_' + Date.now(),
      username,
      name,
      password: pass,
      createdAt: new Date().toISOString()
    };

    teacherAccounts.push(newTeacher);
    saveTeacherAccounts();

    currentTeacher = { id: newTeacher.id, username: newTeacher.username, name: newTeacher.name };
    try { localStorage.setItem(CURRENT_TEACHER_KEY, JSON.stringify(currentTeacher)); } catch (e) {}

    // Init schedule for new teacher
    getActiveTeacherSchedule(username);

    alert(`Account created successfully! Welcome, ${name}.`);
    promptExamScheduleSettings();
  }
}

function logoutTeacherAccount() {
  currentTeacher = null;
  try { localStorage.removeItem(CURRENT_TEACHER_KEY); } catch (e) {}
  document.getElementById('teacherLoginUsername').value = '';
  document.getElementById('teacherLoginPassword').value = '';
  document.getElementById('teacherRegName').value = '';
  document.getElementById('teacherRegUsername').value = '';
  document.getElementById('teacherRegPassword').value = '';
  document.getElementById('teacherRegConfirmPassword').value = '';
  promptExamScheduleSettings();
}

function openScheduleConfigStep() {
  if (!currentTeacher) return;
  const authStep = document.getElementById('scheduleAuthStep');
  const configStep = document.getElementById('scheduleConfigStep');
  const chk = document.getElementById('scheduleEnableCheckbox');
  const startInp = document.getElementById('scheduleStartInput');
  const endInp = document.getElementById('scheduleEndInput');
  const subjectInp = document.getElementById('scheduleSubjectInput');
  const codeDisplay = document.getElementById('scheduleExamCodeDisplay');
  const fieldsWrap = document.getElementById('scheduleFieldsWrap');
  const statusEl = document.getElementById('scheduleModalStatus');

  if (authStep) authStep.style.display = 'none';
  if (configStep) configStep.style.display = 'block';

  updateFirebaseStatusUI();

  const sched = getActiveTeacherSchedule(currentTeacher.username);
  sched.teacherName = currentTeacher.name;

  const hasTimeRestriction = sched.timeRestricted !== undefined
    ? !!sched.timeRestricted
    : !!(sched.startISO || sched.endISO);

  if (subjectInp) subjectInp.value = sched.subjectName || 'Fundamentals of Database';
  if (codeDisplay) codeDisplay.textContent = sched.examCode || generateExamCode();
  if (chk) chk.checked = hasTimeRestriction;
  if (startInp) startInp.value = sched.startISO || '';
  if (endInp) endInp.value = sched.endISO || '';

  const updateFieldsState = () => {
    if (fieldsWrap) {
      fieldsWrap.style.opacity = chk.checked ? '1' : '0.5';
      fieldsWrap.style.pointerEvents = chk.checked ? 'auto' : 'none';
    }
  };
  updateFieldsState();
  if (chk) chk.onchange = updateFieldsState;

  if (statusEl) {
    if (sched.enabled) {
      const now = Date.now();
      const { startTime, endTime } = getScheduleBounds(sched);
      const isOpen = (!startTime || (now + CLOCK_SKEW_GRACE_MS) >= startTime) && (!endTime || now <= endTime);
      statusEl.textContent = isOpen
        ? `Status for ${currentTeacher.name}: 🟢 Exam is Open (Code: ${sched.examCode})`
        : `Status for ${currentTeacher.name}: 🟡 Exam Scheduled / Time Restricted`;
      statusEl.style.color = isOpen ? 'var(--green)' : 'var(--amber)';
      statusEl.style.display = 'block';
    } else {
      statusEl.textContent = `Status for ${currentTeacher.name}: 🔒 Exam Closed / Disabled`;
      statusEl.style.color = 'var(--text-dim)';
      statusEl.style.display = 'block';
    }
  }
}

function closeScheduleModal() {
  document.getElementById('examScheduleModalOverlay')?.classList.remove('show');
}

function saveScheduleFromModal() {
  if (!currentTeacher) return;

  const chk = document.getElementById('scheduleEnableCheckbox');
  const startInp = document.getElementById('scheduleStartInput');
  const endInp = document.getElementById('scheduleEndInput');
  const subjectInp = document.getElementById('scheduleSubjectInput');
  const codeDisplay = document.getElementById('scheduleExamCodeDisplay');

  const useTimeRestriction = !!(chk && chk.checked);

  if (useTimeRestriction) {
    if (!startInp.value && !endInp.value) {
      alert('Please specify at least a Start Date/Time or End Date/Time, or uncheck "Enable Schedule Time Restriction" to open the exam immediately.');
      return;
    }
    if (startInp.value && endInp.value && new Date(startInp.value) >= new Date(endInp.value)) {
      alert('Start Date & Time must be earlier than End Date & Time.');
      return;
    }
  }

  const key = currentTeacher.username.toLowerCase();
  const startISO = useTimeRestriction ? (startInp.value || '') : '';
  const endISO = useTimeRestriction ? (endInp.value || '') : '';

  teacherSchedules[key] = {
    enabled: true,
    explicitlyClosed: false,
    timeRestricted: useTimeRestriction,
    startISO,
    endISO,
    startTimestamp: startISO ? new Date(startISO).getTime() : 0,
    endTimestamp: endISO ? new Date(endISO).getTime() : 0,
    subjectName: (subjectInp && subjectInp.value.trim()) ? subjectInp.value.trim() : 'Fundamentals of Database',
    examCode: (codeDisplay && codeDisplay.textContent.trim()) ? codeDisplay.textContent.trim() : generateExamCode(),
    teacherName: currentTeacher.name,
    teacherUsername: currentTeacher.username,
    updatedAt: new Date().toISOString()
  };

  saveTeacherSchedules();
  closeScheduleModal();
  alert(`Exam is now OPEN for ${currentTeacher.name}!\nAccess Code: ${teacherSchedules[key].examCode}`);
}

function clearScheduleFromModal() {
  if (!currentTeacher) return;
  const key = currentTeacher.username.toLowerCase();
  if (teacherSchedules[key]) {
    teacherSchedules[key].enabled = false;
    teacherSchedules[key].explicitlyClosed = true;
    teacherSchedules[key].updatedAt = new Date().toISOString();
    saveTeacherSchedules();
  }
  closeScheduleModal();
  alert(`Exam schedule closed/disabled for ${currentTeacher.name}.`);
}

// Bind auth & modal tab event listeners
document.getElementById('tabTeacherLogin')?.addEventListener('click', () => setTeacherAuthTab('login'));
document.getElementById('tabTeacherRegister')?.addEventListener('click', () => setTeacherAuthTab('register'));
document.getElementById('teacherLogoutBtn')?.addEventListener('click', logoutTeacherAccount);
document.getElementById('scheduleAuthSubmitBtn')?.addEventListener('click', submitTeacherAuth);
document.getElementById('scheduleAuthCancelBtn')?.addEventListener('click', closeScheduleModal);
document.getElementById('scheduleRegenCodeBtn')?.addEventListener('click', () => {
  const codeDisplay = document.getElementById('scheduleExamCodeDisplay');
  if (codeDisplay) {
    const newCode = generateExamCode();
    codeDisplay.textContent = newCode;
    if (currentTeacher && teacherSchedules[currentTeacher.username.toLowerCase()]) {
      teacherSchedules[currentTeacher.username.toLowerCase()].examCode = newCode;
    }
  }
});
document.getElementById('scheduleCopyCodeBtn')?.addEventListener('click', () => {
  const codeDisplay = document.getElementById('scheduleExamCodeDisplay');
  if (codeDisplay && codeDisplay.textContent) {
    navigator.clipboard.writeText(codeDisplay.textContent.trim()).then(() => {
      alert(`Copied Exam Code: ${codeDisplay.textContent.trim()}`);
    }).catch(() => {
      alert(`Exam Code: ${codeDisplay.textContent.trim()}`);
    });
  }
});
document.getElementById('scheduleCopyLinkBtn')?.addEventListener('click', () => {
  const codeDisplay = document.getElementById('scheduleExamCodeDisplay');
  const subjectInp = document.getElementById('scheduleSubjectInput');
  const chk = document.getElementById('scheduleEnableCheckbox');
  const startInp = document.getElementById('scheduleStartInput');
  const endInp = document.getElementById('scheduleEndInput');
  const code = (codeDisplay && codeDisplay.textContent) ? codeDisplay.textContent.trim() : '';
  const subj = (subjectInp && subjectInp.value.trim()) ? subjectInp.value.trim() : 'Fundamentals of Database';
  const teacher = currentTeacher ? currentTeacher.name : 'Teacher';
  const url = new URL(window.location.href.split('?')[0]);
  url.searchParams.set('exam', code);
  url.searchParams.set('subject', subj);
  url.searchParams.set('teacher', teacher);
  if (chk && chk.checked) {
    if (startInp && startInp.value) url.searchParams.set('start', String(new Date(startInp.value).getTime()));
    if (endInp && endInp.value) url.searchParams.set('end', String(new Date(endInp.value).getTime()));
  }
  const shareUrl = url.toString();
  navigator.clipboard.writeText(shareUrl).then(() => {
    alert(`Copied Student Exam Link!\n\n${shareUrl}\n\nSend this link (or code ${code}) to your students.`);
  }).catch(() => {
    prompt('Copy this Student Exam Link:', shareUrl);
  });
});
document.getElementById('closeExamScheduleModalBtn')?.addEventListener('click', closeScheduleModal);
document.getElementById('scheduleCancelBtn')?.addEventListener('click', closeScheduleModal);
document.getElementById('scheduleSaveBtn')?.addEventListener('click', saveScheduleFromModal);
document.getElementById('scheduleClearBtn')?.addEventListener('click', clearScheduleFromModal);
document.getElementById('landingScheduleBtn')?.addEventListener('click', promptExamScheduleSettings);
document.getElementById('openScheduleModalBtn')?.addEventListener('click', promptExamScheduleSettings);




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
    loadTeacherData();
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

function showLandingView() {
  stopTabSwitchDetection();
  const landing = document.getElementById('landingView');
  const exam = document.getElementById('examView');
  if (landing) landing.style.display = 'block';
  if (exam) exam.style.display = 'none';
}

function showExamView() {
  const landing = document.getElementById('landingView');
  const exam = document.getElementById('examView');
  if (landing) landing.style.display = 'none';
  if (exam) exam.style.display = 'block';
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
  showLandingView();
}

document.getElementById('startExamBtn').addEventListener('click', submitStudentName);
document.getElementById('backBtn').addEventListener('click', () => {
  showLandingView();
});
document.getElementById('studentNameInput').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') { e.preventDefault(); submitStudentName(); }
});
document.getElementById('studentExamCodeInput')?.addEventListener('keydown', (e) => {
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
  const codeInp = document.getElementById('studentExamCodeInput');
  const codeErr = document.getElementById('examCodeError');

  const name = input.value.trim();

  if (currentMode === 'practice') {
    if (name && isNameTaken(name)) {
      errEl.textContent = 'This name has already been used on the leaderboard. Please enter a different name.';
      errEl.style.display = 'block';
      input.focus();
      return;
    }
    errEl.style.display = 'none';
    if (codeErr) codeErr.style.display = 'none';
    studentName = name || 'Practice Student';
    currentStudentExamCode = 'PRACTICE';
    currentStudentSubject = 'Practice Session';
    document.getElementById('studentLabel').textContent = studentName;
    showExamView();
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

  // Validate Exam Access Code against all teacher schedules
  const enteredCode = codeInp ? codeInp.value.trim() : '';
  if (!enteredCode) {
    if (codeErr) { codeErr.textContent = 'Exam Access Code is required. Ask your teacher for the code.'; codeErr.style.display = 'block'; }
    if (codeInp) codeInp.focus();
    return;
  }
  const codeResult = validateStudentExamCode(enteredCode);
  if (!codeResult.valid) {
    if (codeErr) { codeErr.textContent = codeResult.message; codeErr.style.display = 'block'; }
    if (codeInp) codeInp.focus();
    return;
  }
  // Code is valid — link student to the matched teacher's schedule
  currentStudentExamCode = (codeResult.schedule.examCode || enteredCode).toUpperCase();
  currentStudentSubject = codeResult.schedule.subjectName || 'Fundamentals of Database';
  currentStudentTeacherName = codeResult.schedule.teacherName || '';

  errEl.style.display = 'none';
  if (codeErr) codeErr.style.display = 'none';
  studentName = name;

  document.getElementById('studentLabel').textContent = studentName;
  showExamView();
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
    stopTabSwitchDetection();
  } else {
    resetTimerIdle();
    startTabSwitchDetection();
  }
  updateHud();
}

function promptNewStudent() {
  stopTimer();
  stopTabSwitchDetection();
  studentName = '';
  document.getElementById('studentLabel').textContent = '—';

  if (currentMode === 'exam') {
    // Show the lightweight next-student modal: keep exam code active for the session
    const inp = document.getElementById('nextStudentNameInput');
    inp.value = '';
    document.getElementById('nextStudentNameError').style.display = 'none';
    document.getElementById('nextStudentModalOverlay').classList.add('show');
    setTimeout(() => inp.focus(), 0);
  } else {
    // Practice mode: return to landing page
    unlockNameModal();
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
  // Keep the same exam code & subject for the whole exam session (multiple students use the same code)
  // currentStudentExamCode and currentStudentSubject remain as set by the first student entry
  document.getElementById('studentLabel').textContent = studentName;
  document.getElementById('nextStudentModalOverlay').classList.remove('show');
  beginStudentTurn();
}

document.getElementById('nextStudentStartBtn').addEventListener('click', submitNextStudent);
document.getElementById('nextStudentNameInput').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') { e.preventDefault(); submitNextStudent(); }
});
document.getElementById('nextStudentBackBtn').addEventListener('click', () => {
  // Back to landing page so user can switch mode, change code, etc.
  document.getElementById('nextStudentModalOverlay').classList.remove('show');
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
      teachersDbRef = firebase.database().ref('teachers');
      schedulesDbRef = firebase.database().ref('teacherSchedules');
      isFirebaseConfigured = true;
      console.log('Firebase SDK initialized. Verifying Realtime Database connection & rules...');
    } catch (e) {
      console.warn('Firebase init failed, falling back to LocalStorage:', e);
      isFirebaseConfigured = false;
      firebaseConnectionStatus = 'offline';
      updateFirebaseStatusUI();
    }
  } else {
    isFirebaseConfigured = false;
    firebaseConnectionStatus = 'offline';
    updateFirebaseStatusUI();
  }
}

function loadLeaderboard() {
  initFirebase();
  // Always load local leaderboard first so scores are visible immediately or when offline
  try {
    const raw = localStorage.getItem(LEADERBOARD_KEY);
    leaderboard = raw ? JSON.parse(raw) : [];
  } catch (e) {
    leaderboard = [];
  }
  renderLeaderboard();

  if (isFirebaseConfigured && dbRef) {
    dbRef.on('value', (snapshot) => {
      firebaseConnectionStatus = 'connected';
      updateFirebaseStatusUI();
      const data = snapshot.val();
      if (data && typeof data === 'object') {
        leaderboard = Object.values(data);
        saveLeaderboard(true);
      } else if (leaderboard.length > 0) {
        // Push local unsynced leaderboard entries to Firebase once connected
        leaderboard.forEach(entry => {
          dbRef.push(entry).catch(() => {});
        });
      }
      renderLeaderboard();
    }, (err) => {
      handleFirebaseError('leaderboard', err);
      renderLeaderboard();
    });
  }
}

function saveLeaderboard(forceLocal = false) {
  if (!isFirebaseConfigured || forceLocal || firebaseConnectionStatus !== 'connected') {
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
    examCode: currentMode === 'exam' ? (currentStudentExamCode || 'PRACTICE') : 'PRACTICE',
    subjectName: currentMode === 'exam' ? (currentStudentSubject || 'Fundamentals of Database') : 'Practice Session',
    teacherName: currentMode === 'exam' ? (currentStudentTeacherName || '') : '',
    date: new Date().toLocaleString()
  };

  // Always save locally first so scores are never lost if Firebase rules block writes
  leaderboard.push(entry);
  saveLeaderboard(true);
  renderLeaderboard();

  if (isFirebaseConfigured && dbRef) {
    dbRef.push(entry).then(() => {
      firebaseConnectionStatus = 'connected';
      updateFirebaseStatusUI();
    }).catch(err => {
      handleFirebaseError('leaderboard.push', err);
    });
  }
}

function renderLeaderboard() {
  const area = document.getElementById('leaderboardArea');
  const countEl = document.getElementById('leaderboardCount');
  const modalArea = document.getElementById('modalLeaderboardArea');
  const modalCountEl = document.getElementById('modalLeaderboardCount');
  const modalFilterSelect = document.getElementById('modalLeaderboardExamFilter');

  // Populate Exam Code filter select
  if (modalFilterSelect) {
    const codesMap = new Map(); // code -> subjectName
    leaderboard.forEach(e => {
      const code = e.examCode || 'PRACTICE';
      const subj = e.subjectName || (code === 'PRACTICE' ? 'Practice Session' : 'Database Exam');
      if (!codesMap.has(code)) codesMap.set(code, subj);
    });

    let optsHTML = '<option value="all">All Examinations / Practice</option>';
    if (codesMap.has('PRACTICE')) {
      optsHTML += '<option value="PRACTICE">🧪 Practice Sessions</option>';
    }
    codesMap.forEach((subj, code) => {
      if (code !== 'PRACTICE') {
        optsHTML += `<option value="${escapeHTML(code)}">🔑 ${escapeHTML(code)} — ${escapeHTML(subj)}</option>`;
      }
    });
    modalFilterSelect.innerHTML = optsHTML;
    modalFilterSelect.value = selectedExamFilter;
  }

  const q = leaderboardSearchQuery.trim().toLowerCase();
  const sorted = leaderboard.slice().sort((a, b) => b.score - a.score);

  const filtered = sorted.filter(e => {
    // Filter by Exam Code if selected
    if (selectedExamFilter !== 'all') {
      const entryCode = e.examCode || 'PRACTICE';
      if (entryCode !== selectedExamFilter) return false;
    }
    // Filter by search query
    if (!q) return true;
    return (e.name && e.name.toLowerCase().includes(q)) ||
      (e.topic && e.topic.toLowerCase().includes(q)) ||
      (e.questionText && e.questionText.toLowerCase().includes(q)) ||
      (e.examCode && e.examCode.toLowerCase().includes(q)) ||
      (e.subjectName && e.subjectName.toLowerCase().includes(q));
  });

  const countText = (q || selectedExamFilter !== 'all')
    ? `${filtered.length} of ${leaderboard.length} entries`
    : `${leaderboard.length} ${leaderboard.length === 1 ? 'entry' : 'entries'}`;

  if (countEl) countEl.textContent = countText;
  if (modalCountEl) modalCountEl.textContent = countText;

  if (filtered.length === 0) {
    const emptyHTML = leaderboard.length === 0
      ? '<div class="empty-msg">No one has finished the exam yet — scores will appear here as students complete it.</div>'
      : `<div class="empty-msg">No entries match your search/filter criteria.</div>`;
    if (area) area.innerHTML = emptyHTML;
    if (modalArea) modalArea.innerHTML = emptyHTML;
    return;
  }

  let h = `<table>
    <thead>
      <tr>
        <th style="width:40px; text-align:center;">#</th>
        <th style="min-width:140px;">Name</th>
        <th style="min-width:160px;">Exam Code / Subject</th>
        <th style="min-width:180px;">Question / Topic</th>
        <th style="width:100px;">Score</th>
        <th style="width:60px; text-align:center;">%</th>
        <th style="width:160px;">Completed Date</th>
      </tr>
    </thead>
    <tbody>`;

  filtered.forEach((entry, i) => {
    const origIdx = leaderboard.indexOf(entry);
    const hasHistory = entry.history && entry.history.length > 0;
    const nameCell = hasHistory
      ? `<a class="student-replay-link" onclick="openReplayModal(${origIdx})" title="Click to replay student typing">🎬 ${escapeHTML(entry.name)}</a>`
      : escapeHTML(entry.name);
    const pctColor = entry.pct >= 80 ? 'var(--green)' : entry.pct >= 50 ? 'var(--amber)' : 'var(--red)';
    const codeTag = entry.examCode && entry.examCode !== 'PRACTICE'
      ? `<span class="code-badge">${escapeHTML(entry.examCode)}</span> <span style="font-size:11px; color:var(--text-dim);">${escapeHTML(entry.subjectName || '')}</span>`
      : `<span style="font-family:var(--mono); font-size:10.5px; color:var(--text-dim); background:var(--panel); border:1px solid var(--border); border-radius:4px; padding:1px 5px;">PRACTICE</span>`;

    h += `<tr>
      <td style="text-align:center; color:var(--text-dim); font-weight:600;">${i + 1}</td>
      <td style="font-weight:600;">${nameCell}</td>
      <td>${codeTag}</td>
      <td style="color:var(--text-dim); line-height:1.4;">${escapeHTML(entry.topic || entry.questionText || '—')}</td>
      <td style="font-weight:700; color:var(--cyan); white-space:nowrap;">${entry.score} / ${entry.maxScore}</td>
      <td style="text-align:center; font-weight:600; color:${pctColor};">${entry.pct}%</td>
      <td style="color:var(--text-faint); font-size:11.5px; white-space:nowrap;">${escapeHTML(entry.date)}</td>
    </tr>`;
  });
  h += '</tbody></table>';
  if (area) area.innerHTML = h;
  if (modalArea) modalArea.innerHTML = h;
}

document.getElementById('modalLeaderboardExamFilter')?.addEventListener('change', (e) => {
  selectedExamFilter = e.target.value;
  renderLeaderboard();
});

document.getElementById('landingLeaderboardBtn')?.addEventListener('click', openLeaderboardModal);

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

/* ============================= PDF EXPORT ============================= */
function downloadLeaderboardPDF() {
  const q = leaderboardSearchQuery.trim().toLowerCase();
  const sorted = leaderboard.slice().sort((a, b) => b.score - a.score);
  const filtered = q
    ? sorted.filter(e =>
        (e.name && e.name.toLowerCase().includes(q)) ||
        (e.topic && e.topic.toLowerCase().includes(q)) ||
        (e.questionText && e.questionText.toLowerCase().includes(q))
      )
    : sorted;

  if (filtered.length === 0) {
    alert('No leaderboard data available to export.');
    return;
  }

  // Check if jsPDF library is loaded
  if (window.jspdf && window.jspdf.jsPDF) {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Document Header
    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.text("SQL Practical Exam - Leaderboard", 14, 18);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.setTextColor(100);
    const dateStr = new Date().toLocaleString();
    doc.text(`Generated on: ${dateStr} | Total Records: ${filtered.length}`, 14, 25);

    // Build table rows containing ONLY Name, Question, and Score
    const tableBody = filtered.map(e => [
      e.name || '—',
      e.topic || e.questionText || '—',
      `${e.score} / ${e.maxScore}`
    ]);

    doc.autoTable({
      startY: 30,
      head: [['Name', 'Question', 'Score']],
      body: tableBody,
      theme: 'grid',
      headStyles: {
        fillColor: [15, 23, 42],
        textColor: [255, 255, 255],
        fontStyle: 'bold',
        fontSize: 11
      },
      bodyStyles: {
        fontSize: 10,
        textColor: [30, 41, 59]
      },
      alternateRowStyles: {
        fillColor: [248, 250, 252]
      },
      columnStyles: {
        0: { cellWidth: 55 },
        1: { cellWidth: 100 },
        2: { cellWidth: 35, halign: 'center' }
      }
    });

    doc.save('leaderboard.pdf');
  } else {
    // Fallback print window if jsPDF CDN is unavailable
    const printWin = window.open('', '_blank');
    if (!printWin) {
      alert('Pop-up blocked. Please allow pop-ups to print the leaderboard PDF.');
      return;
    }

    let rowsHtml = filtered.map(e => `
      <tr>
        <td style="padding:8px; border:1px solid #ddd;">${escapeHTML(e.name || '—')}</td>
        <td style="padding:8px; border:1px solid #ddd;">${escapeHTML(e.topic || e.questionText || '—')}</td>
        <td style="padding:8px; border:1px solid #ddd; text-align:center;">${e.score} / ${e.maxScore}</td>
      </tr>
    `).join('');

    printWin.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Leaderboard PDF</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 20px; color: #333; }
          h2 { margin-bottom: 5px; }
          .meta { font-size: 12px; color: #666; margin-bottom: 20px; }
          table { width: 100%; border-collapse: collapse; margin-top: 10px; }
          th { background: #0f172a; color: white; padding: 10px; border: 1px solid #0f172a; text-align: left; }
          th.center, td.center { text-align: center; }
        </style>
      </head>
      <body>
        <h2>SQL Practical Exam - Leaderboard</h2>
        <div class="meta">Generated: ${new Date().toLocaleString()} | Entries: ${filtered.length}</div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Question</th>
              <th class="center">Score</th>
            </tr>
          </thead>
          <tbody>
            ${rowsHtml}
          </tbody>
        </table>
        <script>
          window.onload = function() { window.print(); window.close(); };
        <\/script>
      </body>
      </html>
    `);
    printWin.document.close();
  }
}

document.getElementById('downloadPdfBtn')?.addEventListener('click', downloadLeaderboardPDF);
document.getElementById('modalDownloadPdfBtn')?.addEventListener('click', downloadLeaderboardPDF);

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

// (Schedule modal event listeners are bound in Section: EXAM MODE SCHEDULE & AUTHORIZATION)

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

/* ============================= TAB SWITCH ANTI-CHEAT ENGINE ============================= */
function startTabSwitchDetection() {
  stopTabSwitchDetection();
  document.addEventListener('visibilitychange', handleTabSwitchEvent);
  window.addEventListener('blur', handleTabSwitchEvent);
}

function stopTabSwitchDetection() {
  document.removeEventListener('visibilitychange', handleTabSwitchEvent);
  window.removeEventListener('blur', handleTabSwitchEvent);
  clearTabSwitchTimers();
  closeTabSwitchWarningModal();
}

function clearTabSwitchTimers() {
  if (tabSwitchAckTimer) { clearInterval(tabSwitchAckTimer); tabSwitchAckTimer = null; }
  if (tabSwitchPenaltyTimer) { clearInterval(tabSwitchPenaltyTimer); tabSwitchPenaltyTimer = null; }
  tabSwitchWarningShown = false;
  tabSwitchPenaltyActive = false;
}

function closeTabSwitchWarningModal() {
  document.getElementById('tabSwitchWarningOverlay')?.classList.remove('show');
}

function handleTabSwitchEvent(e) {
  if (currentMode !== 'exam' || turnSubmitted || tabSwitchWarningShown) return;
  if (e.type === 'visibilitychange' && !document.hidden) return;
  triggerTabSwitchNotice();
}

function triggerTabSwitchNotice() {
  if (currentMode !== 'exam' || turnSubmitted || tabSwitchWarningShown) return;
  tabSwitchWarningShown = true;
  tabSwitchAckRemaining = 10;

  const overlay = document.getElementById('tabSwitchWarningOverlay');
  const ackCountEl = document.getElementById('tabSwitchAckCountdown');
  const ackBtn = document.getElementById('tabSwitchAckBtn');
  const penaltyBar = document.getElementById('tabSwitchPenaltyBar');

  if (ackCountEl) ackCountEl.textContent = tabSwitchAckRemaining;
  if (ackBtn) {
    ackBtn.style.display = 'block';
    ackBtn.textContent = 'I Understand — Continue Exam';
  }
  if (penaltyBar) penaltyBar.style.display = 'none';

  overlay?.classList.add('show');

  if (tabSwitchAckTimer) clearInterval(tabSwitchAckTimer);
  tabSwitchAckTimer = setInterval(() => {
    tabSwitchAckRemaining--;
    if (ackCountEl) ackCountEl.textContent = Math.max(0, tabSwitchAckRemaining);
    if (tabSwitchAckRemaining <= 0) {
      clearInterval(tabSwitchAckTimer);
      tabSwitchAckTimer = null;
      start30sPenaltyCountdown();
    }
  }, 1000);
}

function acknowledgeTabSwitchNotice() {
  // Student clicked OK → dismiss modal, reset state, NO penalty.
  clearTabSwitchTimers();
  closeTabSwitchWarningModal();
  // Re-arm detection for any further tab-switch during this same turn.
  if (currentMode === 'exam' && !turnSubmitted) {
    window.addEventListener('blur', handleTabSwitchEvent);
    document.addEventListener('visibilitychange', handleTabSwitchEvent);
  }
}

function start30sPenaltyCountdown() {
  if (tabSwitchPenaltyActive) return;
  tabSwitchPenaltyActive = true;
  tabSwitchPenaltyRemaining = 30;

  const ackBtn = document.getElementById('tabSwitchAckBtn');
  const penaltyBar = document.getElementById('tabSwitchPenaltyBar');

  if (ackBtn) ackBtn.style.display = 'none';
  if (penaltyBar) penaltyBar.style.display = 'block';

  updatePenaltyDisplay();

  if (tabSwitchPenaltyTimer) clearInterval(tabSwitchPenaltyTimer);
  tabSwitchPenaltyTimer = setInterval(() => {
    tabSwitchPenaltyRemaining--;
    updatePenaltyDisplay();
    if (tabSwitchPenaltyRemaining <= 0) {
      clearTabSwitchTimers();
      closeTabSwitchWarningModal();
      if (!turnSubmitted) {
        const text = document.getElementById('queryInput')?.value.trim();
        if (text) {
          submitAnswer();
        } else {
          submitNoAnswer();
        }
      }
    }
  }, 1000);
}

function updatePenaltyDisplay() {
  const countEl = document.getElementById('tabSwitchPenaltyCount');
  const fillEl = document.getElementById('tabSwitchPenaltyFill');
  if (countEl) countEl.textContent = Math.max(0, tabSwitchPenaltyRemaining);
  if (fillEl) {
    const pct = (Math.max(0, tabSwitchPenaltyRemaining) / 30) * 100;
    fillEl.style.width = pct + '%';
  }
}

document.getElementById('tabSwitchAckBtn')?.addEventListener('click', acknowledgeTabSwitchNotice);


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
  stopTabSwitchDetection();
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
  stopTabSwitchDetection();
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