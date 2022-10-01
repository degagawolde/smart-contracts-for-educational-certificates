import sys
sys.path.append("backend")
from flask_app import init_app

class TestEndpoints():

    def setUp(self):
        app = init_app()
        self.ctx = app.app_context()
        self.ctx.push()
        self.client = app.test_client()

    def tearDown(self):
        self.ctx.pop()

    def test_test(self):
        self.setUp()
        response = self.client.get("/test")
        print("response:", response.data)
        assert response.status_code == 200
        assert b"Hello, world" == response.data
