# Create Future Value function 
# FV = PV * (1+r)^t
# FV = Future Value 
# PV = Present Value (initial investment) 
# r = Annual ROR (expressed as decimal)
# t = Time (in years)

# I am using a less conservative ROR estimate; more conservatively it would be 7% 
# But I want the user to really feel the shame of spending
# Capitalized because we are keeping it constant

ROR = .10

def future_value_calc(expense, ROR, horizon): 
    future_value = expense * ((1 + ROR) ** horizon)
    return future_value

# Ask user their age 

age = int(input("How old are you? "))

# Ask user what age they expect to retire 

retirement_age = int(input("At what age do you expect to retire? "))

# Determine time to retirement age (time horizon)

horizon = retirement_age - age 

# Ask user how much they spent

expense = float(input("How much money did you just spend? $"))

# Run Future Value formula using the inputs  

fv = future_value_calc(expense, ROR, horizon)

# Make sure you round to cents 

fv = round(fv, 2)

# Spit back a statement revealing how much that amount would be if it was invested

print(f"If you had invested that ${expense}, it would have become ${fv} by the time you retired.")