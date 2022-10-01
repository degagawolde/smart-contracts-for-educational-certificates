"""Application entry point."""
from flask_app import routes


app = init_app()


if __name__ == "__main__":
    app.run(host="0.0.0.0", debug=True)
