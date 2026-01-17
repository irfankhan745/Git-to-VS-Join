from playwright.sync_api import sync_playwright
import time

def clicker_ok(url, selectors, interval=2):
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=False)
        page = browser.new_page()
        page.goto(url)

        time.sleep(3)

        while True:
            for selector in selectors:
                try:
                    page.locator(selector).scroll_into_view_if_needed()
                    page.locator(selector).click()
                    time.sleep(interval)
                except:
                    pass
