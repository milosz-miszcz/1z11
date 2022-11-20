import requests
import shutil
import urllib

from openpyxl import load_workbook

wb = load_workbook(filename='BazaPytanS.xlsx')
sheet = wb['SOPER']

for x in range(489):

    text = 'H{}'.format(x+1)
    if sheet[text].value:
        print(x,sheet[text].value)
        image_url = sheet[text].value
        filename = "UTK{}.png".format(x+1)
        def download_jpg(url, file_path, file_name):
            full_path = file_path + file_name
            urllib.request.urlretrieve(url, full_path)
        download_jpg(image_url, r"D:\Project\Image\Systemy/", filename)

wb = load_workbook(filename='BazaPytanU.xlsx')
sheet = wb['UTK']
for x in range(694):

    text = 'H{}'.format(x+1)
    if sheet[text].value:
        print(x,sheet[text].value)
        image_url = sheet[text].value
        filename = "UTK{}.png".format(x+1)
        def download_jpg(url, file_path, file_name):
            full_path = file_path + file_name
            urllib.request.urlretrieve(url, full_path)
        download_jpg(image_url, r"D:\Project\Image\Urządzenia/", filename)

wb = load_workbook(filename='BazaPytanE.xlsx')
sheet = wb['ELSK']
for x in range(1090):

    text = 'H{}'.format(x+1)
    if sheet[text].value:
        print(x,sheet[text].value)
        image_url = sheet[text].value
        filename = "ELSK{}.png".format(x+1)
        def download_jpg(url, file_path, file_name):
            full_path = file_path + file_name
            urllib.request.urlretrieve(url, full_path)
        download_jpg(image_url, r"D:\Project\Image\Sieci/", filename)