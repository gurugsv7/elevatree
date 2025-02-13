import bcrypt

password = b"my_secret_password"
hashed_password = bcrypt.hashpw(password, bcrypt.gensalt())

print(f"Original password: {password}")
print(f"Hashed password: {hashed_password}")

if bcrypt.checkpw(password, hashed_password):
    print("Password matches.")
else:
    print("Password does not match.")
