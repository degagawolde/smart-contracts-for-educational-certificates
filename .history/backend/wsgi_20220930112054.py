"""Application entry point."""
import flask_app.init_app


app = init_app()


if __name__ == "__main__":
    app.run(host="0.0.0.0", debug=True)
