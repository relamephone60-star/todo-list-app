// Constants
const STORAGE_KEY = 'todos';
const CURRENT_FILTER = 'currentFilter';

// DOM Elements
const todoInput = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');
const emptyState = document.getElementById('emptyState');
const filterButtons = document.querySelectorAll('.filter-btn');
const clearCompletedBtn = document.getElementById('clearCompletedBtn');
const clearAllBtn = document.getElementById('clearAllBtn');
const totalCount = document.getElementById('totalCount');
const activeCount = document.getElementById('activeCount');
const completedCount = document.getElementById('completedCount');

// State
let todos = [];
let currentFilter = 'all';

// Initialize app
function init() {
    loadTodos();
    setupEventListeners();
    loadFilter();
    render();
}

// Setup event listeners
function setupEventListeners() {
    addBtn.addEventListener('click', addTodo);
    todoInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTodo();
        }
    });

    filterButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            setFilter(e.target.dataset.filter);
        });
    });

    clearCompletedBtn.addEventListener('click', clearCompleted);
    clearAllBtn.addEventListener('click', clearAll);
}

// Add a new todo
function addTodo() {
    const text = todoInput.value.trim();
    
    if (text === '') {
        alert('Please enter a task');
        return;
    }

    const todo = {
        id: Date.now(),
        text: text,
        completed: false,
        priority: 'medium',
        createdAt: new Date().toLocaleString()
    };

    todos.unshift(todo);
    saveTodos();
    todoInput.value = '';
    todoInput.focus();
    render();
}

// Toggle todo completion
function toggleTodo(id) {
    const todo = todos.find(t => t.id === id);
    if (todo) {
        todo.completed = !todo.completed;
        saveTodos();
        render();
    }
}

// Delete a todo
function deleteTodo(id) {
    todos = todos.filter(t => t.id !== id);
    saveTodos();
    render();
}

// Clear all completed todos
function clearCompleted() {
    if (confirm('Are you sure you want to delete all completed tasks?')) {
        todos = todos.filter(t => !t.completed);
        saveTodos();
        render();
    }
}

// Clear all todos
function clearAll() {
    if (confirm('Are you sure you want to delete ALL tasks? This cannot be undone!')) {
        todos = [];
        saveTodos();
        render();
    }
}

// Set current filter
function setFilter(filter) {
    currentFilter = filter;
    localStorage.setItem(CURRENT_FILTER, filter);
    
    filterButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.filter === filter) {
            btn.classList.add('active');
        }
    });
    
    render();
}

// Load filter from storage
function loadFilter() {
    const savedFilter = localStorage.getItem(CURRENT_FILTER);
    if (savedFilter) {
        currentFilter = savedFilter;
        setFilter(savedFilter);
    }
}

// Get filtered todos
function getFilteredTodos() {
    switch (currentFilter) {
        case 'active':
            return todos.filter(t => !t.completed);
        case 'completed':
            return todos.filter(t => t.completed);
        default:
            return todos;
    }
}

// Update stats
function updateStats() {
    const total = todos.length;
    const active = todos.filter(t => !t.completed).length;
    const completed = todos.filter(t => t.completed).length;

    totalCount.textContent = total;
    activeCount.textContent = active;
    completedCount.textContent = completed;
}

// Render todos
function render() {
    const filteredTodos = getFilteredTodos();
    
    todoList.innerHTML = filteredTodos.map(todo => `
        <li class="todo-item ${todo.completed ? 'completed' : ''}">
            <input 
                type="checkbox" 
                class="checkbox" 
                ${todo.completed ? 'checked' : ''}
                onchange="toggleTodo(${todo.id})"
            />
            <div class="todo-content">
                <div class="todo-text">${escapeHtml(todo.text)}</div>
                <div>
                    <span class="todo-priority priority-${todo.priority}">${todo.priority.toUpperCase()}</span>
                    <span class="todo-time">${todo.createdAt}</span>
                </div>
            </div>
            <button class="delete-btn" onclick="deleteTodo(${todo.id})">Delete</button>
        </li>
    `).join('');

    // Show/hide empty state
    if (filteredTodos.length === 0) {
        emptyState.classList.add('show');
    } else {
        emptyState.classList.remove('show');
    }

    updateStats();
}

// Save todos to localStorage
function saveTodos() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}

// Load todos from localStorage
function loadTodos() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
        todos = JSON.parse(saved);
    } else {
        todos = [];
    }
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', init);