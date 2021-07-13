How To Use

Requirements
python3.x
npm

Install Dependencies
`pip install -r requirements.txt`
`cd frontend && npm install`

Set Database (Make Sure you are in directory same as manage.py)
`python manage.py makemigrations`
`python manage.py migrate`

Build javascript
`cd frontend && npm run build`

Run Server
`python manage.py runserver`

Open tab to `http://127.0.0.1:8000` to see the main site
