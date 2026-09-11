# Todo List Application

A simple, elegant, and fully functional todo list application with persistent local storage. Stay organized and manage your daily tasks efficiently!

## 🌟 Features

✨ **Key Features:**
- ✅ Add, complete, and delete tasks
- 💾 Automatic local storage - tasks persist between sessions
- 🔍 Filter tasks by status (All, Active, Completed)
- 📊 Real-time statistics (Total, Active, Completed counts)
- 🎨 Beautiful, modern UI with smooth animations
- 📱 Fully responsive mobile-friendly design
- 🏷️ Priority levels for tasks (High, Medium, Low)
- ⏰ Timestamps for each task
- 🗑️ Bulk actions (Clear Completed, Clear All)
- 🔒 XSS protection with HTML escaping

## 📸 Screenshots

The app features:
- Clean, gradient-based design
- Intuitive input section with add button
- Filter buttons for task management
- Statistics dashboard showing task counts
- Smooth animations and hover effects
- Responsive layout for all screen sizes

## 🚀 How to Use

1. **Open** `index.html` in your web browser
2. **Add a Task:** Type in the input field and press Enter or click "Add Task"
3. **Complete a Task:** Check the checkbox next to a task
4. **Delete a Task:** Click the "Delete" button on the task
5. **Filter Tasks:**
   - Click "All" to see all tasks
   - Click "Active" to see incomplete tasks
   - Click "Completed" to see finished tasks
6. **Manage Tasks:**
   - Click "Clear Completed" to remove all finished tasks
   - Click "Clear All" to delete everything (with confirmation)

## 💾 Local Storage

Tasks are automatically saved to your browser's localStorage under the key `todos`. Each task object contains:

```json
{
  "id": 1234567890,
  "text": "Task description",
  "completed": false,
  "priority": "medium",
  "createdAt": "9/11/2026, 9:15:00 PM"
}
```

Your tasks will persist even after closing and reopening the browser!

## 🛠️ Technologies Used

- **HTML5:** Semantic markup structure
- **CSS3:** Flexbox/Grid layout, animations, responsive design
- **JavaScript (ES6+):**
  - DOM manipulation
  - LocalStorage API
  - Event handling
  - Array methods (filter, map, find)
- **LocalStorage:** Persistent client-side data storage

## 📁 File Structure

```
├── index.html      # Main HTML structure
├── style.css       # Styles and responsive design
├── script.js       # JavaScript logic and functionality
└── README.md       # This file
```

## 🎨 Customization

### Change Color Scheme

Edit the gradient in `style.css`:

```css
body {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

### Add More Priority Levels

Update `style.css` to add new priority styles and modify `script.js` to handle them:

```css
.priority-urgent {
    background: #ffcccc;
    color: #c41c3b;
}
```

### Adjust Task Appearance

Modify the `.todo-item` and related classes in `style.css`.

## 🌐 Browser Support

- ✅ Chrome/Edge: Full support
- ✅ Firefox: Full support
- ✅ Safari: Full support
- ⚠️ IE11: Limited support (no localStorage in private mode)

## 🔒 Security

- XSS protection: User input is properly escaped using `textContent` and HTML entity encoding
- No external dependencies or CDN requirements
- All data stored locally - nothing sent to servers

## 🚀 Future Enhancements

- [ ] Due date functionality
- [ ] Categories/Tags for tasks
- [ ] Search functionality
- [ ] Dark mode toggle
- [ ] Export/Import tasks as JSON
- [ ] Recurring tasks
- [ ] Task editing capability
- [ ] Drag and drop reordering
- [ ] Notifications for due dates
- [ ] Sync across devices

## 📝 License

MIT License - Feel free to use this project for personal or commercial purposes.

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues and enhancement requests.

## 💡 Tips

- Your tasks are saved automatically - no need to manually save!
- Clear your browser cache to reset the app to default state
- Use the filter buttons to focus on specific task categories
- Check the statistics to track your productivity
