# This is based on a mock interview from Jane Street to
# simulate one of their questions while I played with it

from random import random
import math

rounds = 10000
currentPayout = 0
totalPayout = 0

strategy = 3 # if roll is at least this, then take


def roll():
    return math.floor(random()*20) + 1

def take():
    global rounds, totalPayout
    rounds -= 1
    totalPayout += currentPayout


while rounds > 0:
    currentPayout = roll()
    rounds -= 1
    if (currentPayout >= strategy):
        if (currentPayout > 10.5): currentPayout = roll() # casino roll
        if (rounds > 0): 
            take()

print(totalPayout/10000)

    
