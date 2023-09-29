from datetime import datetime

date_format_and_week_days = datetime.now().strftime('%d de %B de %y, the day of the week is: %A')

print(date_format_and_week_days)
