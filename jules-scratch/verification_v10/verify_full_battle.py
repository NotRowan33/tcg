import os
import json
from playwright.sync_api import sync_playwright, expect

def test_full_battle(page):
    file_path = "file://" + os.path.abspath("index.html")
    page.goto(file_path)

    # --- Setup ---
    page.evaluate("localStorage.clear()")
    mock_collection = { "1": 20, "2": 20, "3": 20, "4": 20, "5": 20, "11": 1 }
    mock_deck = [1, 2, 3, 4, 5, 11, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5]
    page.evaluate(f"localStorage.setItem('cardCollection', '{json.dumps(mock_collection)}')")
    page.evaluate(f"localStorage.setItem('playerDeck', '{json.dumps(mock_deck)}')")
    page.reload()

    # --- Start Battle & Play Card ---
    page.locator("#battle-btn").click()
    page.wait_for_timeout(500)
    page.locator("#player-zone .hand-container .card").first.click()
    page.wait_for_timeout(500)
    page.screenshot(path="jules-scratch/verification_v10/1_player_card_on_bench.png")

    # --- End Turn & Let AI Play ---
    page.locator("#end-turn-btn").click()
    page.wait_for_timeout(2000)

    # --- Player's Second Turn ---
    # If AI destroyed our card, play another one.
    if page.locator("#player-zone .bench-container .card").count() == 0:
        page.locator("#player-zone .hand-container .card").first.click()
        page.wait_for_timeout(500)

    page.screenshot(path="jules-scratch/verification_v10/2_player_turn_2_start.png")

    # Weaken the AI's first card to ensure it's defeated
    page.evaluate("opponentBench[0].currentHealth = 1")
    page.evaluate("updateBattleUI()")

    # Attack and defeat the card
    page.locator("#player-zone .bench-container .card").first.click()
    page.wait_for_timeout(200)
    page.locator("#opponent-zone .bench-container .card").first.click()
    page.wait_for_timeout(1000)
    page.screenshot(path="jules-scratch/verification_v10/3_after_attack.png")


with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page()
    test_full_battle(page)
    browser.close()
