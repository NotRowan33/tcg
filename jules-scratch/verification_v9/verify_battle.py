import os
import json
from playwright.sync_api import sync_playwright, expect

def test_battle_sequence(page):
    file_path = "file://" + os.path.abspath("index.html")
    page.goto(file_path)

    # --- Setup ---
    page.evaluate("localStorage.clear()")
    mock_collection = { "1": 1, "2": 1, "3": 1, "4": 1, "5": 1, "6": 1, "7": 1, "8": 1, "9": 1, "10": 1, "11": 1, "12": 1, "13": 1, "14": 1, "15": 1, "16": 1, "17": 1, "18": 1, "19": 1, "20": 1 }
    mock_deck = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    page.evaluate(f"localStorage.setItem('cardCollection', '{json.dumps(mock_collection)}')")
    page.evaluate(f"localStorage.setItem('playerDeck', '{json.dumps(mock_deck)}')")
    page.reload()

    # --- Start Battle ---
    page.locator("#battle-btn").click()
    page.wait_for_timeout(500)
    page.screenshot(path="jules-scratch/verification_v9/1_battle_start.png")

    # --- Player Turn 1: Play a card ---
    page.locator("#player-zone .hand-container .card").first.click()
    page.wait_for_timeout(500)
    page.screenshot(path="jules-scratch/verification_v9/2_player_plays_card.png")

    # --- End Turn 1 ---
    page.locator("#end-turn-btn").click()
    page.wait_for_timeout(2000) # Wait for AI turn
    page.screenshot(path="jules-scratch/verification_v9/3_after_ai_turn.png")

    # --- Player Turn 2: Attack ---
    # Select attacker
    page.locator("#player-zone .bench-container .card").first.click()
    page.wait_for_timeout(200)
    # Select target
    page.locator("#opponent-zone .bench-container .card").first.click()
    page.wait_for_timeout(1500) # Wait for attack and AI response
    page.screenshot(path="jules-scratch/verification_v9/4_after_player_attack.png")

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page()
    test_battle_sequence(page)
    browser.close()
