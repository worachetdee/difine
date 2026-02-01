from playwright.sync_api import sync_playwright

def verify_restaurants():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            print("Navigating to /restaurants...")
            page.goto("http://localhost:3000/restaurants")

            # Wait for the restaurants to load
            print("Waiting for restaurants to load...")
            page.wait_for_selector("text=The Gilded Fork", timeout=10000)
            page.wait_for_selector("text=Azure Sky", timeout=10000)

            print("Taking screenshot...")
            page.screenshot(path="verification/restaurants.png", full_page=True)
            print("Screenshot saved to verification/restaurants.png")

        except Exception as e:
            print(f"Error: {e}")
            page.screenshot(path="verification/error.png")

        finally:
            browser.close()

if __name__ == "__main__":
    verify_restaurants()
