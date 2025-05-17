from flask import Flask, render_template

app = Flask(__name__)

# Sample data - in a real application, you might fetch this from a database
portfolio_data = {
    'name': 'Jane Doe',
    'title': 'Full Stack Developer',
    'bio': 'Passionate software developer with expertise in Python, JavaScript, and cloud technologies.',
    'skills': [
        {'name': 'Python', 'level': 90},
        {'name': 'JavaScript', 'level': 85},
        {'name': 'HTML/CSS', 'level': 80},
        {'name': 'Flask', 'level': 75},
        {'name': 'React', 'level': 70},
        {'name': 'SQL', 'level': 65},
    ],
    'projects': [
        {
            'title': 'E-commerce Platform',
            'description': 'Built a full-featured online store using Flask, SQLAlchemy, and Stripe integration.',
            'image': '/static/img/project1.jpg',
            'technologies': ['Python', 'Flask', 'SQLAlchemy', 'Stripe API']
        },
        {
            'title': 'Task Management App',
            'description': 'Developed a productivity application with React frontend and Flask backend.',
            'image': '/static/img/project2.jpg',
            'technologies': ['React', 'Python', 'Flask', 'MongoDB']
        },
        {
            'title': 'Data Visualization Dashboard',
            'description': 'Created interactive data visualizations using D3.js and Python data processing.',
            'image': '/static/img/project3.jpg',
            'technologies': ['D3.js', 'Python', 'Pandas', 'Flask']
        }
    ],
    'contact': {
        'email': 'jane.doe@example.com',
        'linkedin': 'linkedin.com/in/janedoe',
        'github': 'github.com/janedoe',
        'twitter': 'twitter.com/janedoe'
    }
}

@app.route('/')
def home():
    return render_template('index.html', data=portfolio_data)

@app.route('/about')
def about():
    return render_template('about.html', data=portfolio_data)

@app.route('/projects')
def projects():
    return render_template('projects.html', data=portfolio_data)

@app.route('/contact')
def contact():
    return render_template('contact.html', data=portfolio_data)

if __name__ == '__main__':
    app.run(debug=True)