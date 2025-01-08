from flask import Flask, render_template, request, redirect, url_for
from werkzeug.utils import secure_filename
import pymysql
import pymysql.cursors
import os

app = Flask(__name__)

conn = cursor = None

# fungsi koneksi database
def openDB():
    global conn, cursor
    conn = pymysql.connect(host="localhost", user="root", passwd="pasya", database="crud_dbmysql")
    cursor = conn.cursor()  # untuk memulai koneksi

def closeDB():
    global conn, cursor
    cursor.close()
    conn.close()

@app.route("/")
def main():
    openDB()
    container = []
    sql = "SELECT * FROM stikom"
    cursor.execute(sql)
    results = cursor.fetchall()
    for data in results:
        container.append(data)
    closeDB()
    return render_template('home.html', container=container)

if __name__ == "__main__":
    app.run()
