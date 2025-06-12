1. We need to create scenarios for user login

Need to create several systems: 
- LocalUsersMachine
- RemoteUsersMachine
- GuestUsersMachine

We need to search information about user in every Machine and create Guest permissions if user isn't found

2. We need to create scenarios for different user roles:

Guest:
- Disable AC's
- Turn on light at 100%

Owner:
- Enable AC`s
- Turn on light at 100%

Lover:
- Enable AC`s
- Turn on light at 30%
- Disable clocks

Pay attention: here we don't have relations between steps.. thats sucks. 
Though in real-world scenario each chain will depend on previous chain results.
