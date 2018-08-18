def get_session_str(session):
    cookies = session.cookies.get_dict()
    return generate_cookie_str(cookies)

def generate_cookies(cookies):
    cookieStr = generate_cookie_str(cookies)
    return {"Cookie": cookieStr}

def generate_cookie_str(cookies):
    cookieStr = ""
    for cookie in cookies.items():
        cookieStr += cookie[0] + "=" + cookie[1] + "; "
    return cookieStr

