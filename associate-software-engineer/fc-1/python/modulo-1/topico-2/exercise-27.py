from datetime import timedelta, date
date_insert = date(2023, 9, 25)
amount_day_additional = timedelta(days=5)
sum_day_of_date = date_insert + amount_day_additional

print(sum_day_of_date)
