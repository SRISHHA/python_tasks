from bs4 import BeautifulSoup
import requests
import pandas as pd


textee=requests.get("https://meamedicalclinics.com/locations/").text
soup=BeautifulSoup(textee,'lxml')
Medical_Clinics=soup.find_all('h5',class_="et_pb_toggle_title")

cliniclist=[]
for clinic in Medical_Clinics:
    cliniclist.append(clinic.text)


inf=[]
Address=soup.find_all("div",class_="et_pb_toggle_content clearfix")
for i in Address:
    inf.append(i.text)


df=pd.DataFrame({"Clinic_Name" : cliniclist,
                "Information" : inf})  

file_name = 'info.xlsx'

df.to_excel(file_name,index=False)
