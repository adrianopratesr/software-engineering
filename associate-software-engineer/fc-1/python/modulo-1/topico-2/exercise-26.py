from datetime import date
date_min = date(2022, 9, 25)
date_max = date(2023, 9, 25)
difference = date_max - date_min

print(difference.days)
