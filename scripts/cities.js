var states = [
	{
		"name" : "Andaman and Nicobar Islands",
		"cities" : ["Port Blair"]
	},
	{
		"name" : "Andhra Pradesh",
		"cities" : ["Adilabad",
					"Adoni",
					"Amadalavalasa",
					"Amalapuram",
					"Ameenapuram",
					"Anakapalle",
					"Anantapur",
					"Badepalle",
					"Banganapalle",
					"Bapatla",
					"Bellampalle",
					"Bethamcherla",
					"Bhadrachalam",
					"Bhainsa",
					"Bheemunipatnam",
					"Bhimavaram",
					"Bhongir",
					"Bobbili",
					"Bodhan",
					"Chapirevula",
					"Chilakaluripet",
					"Chirala",
					"Chittoor",
					"Cuddapah",
					"Devarakonda",
					"Dharmavaram",
					"Eluru",
					"Farooqnagar",
					"Gadwal",
					"Gooty",
					"Gudivada",
					"Gudur",
					"Guntakal",
					"Guntur",
					"Hanuman Junction",
					"Hindupur",
					"Hyderabad*",
					"Ichchapuram",
					"Jaggaiahpet",
					"Jagtial",
					"Jammalamadugu",
					"Jangaon",
					"Kadapa",
					"Kadiri",
					"Kagaznagar",
					"Kakinada",
					"Kalyandurg",
					"Kamareddy",
					"Kandukur",
					"Karimnagar",
					"Kavali",
					"Khammam",
					"Kodad",
					"Koratla",
					"Kothagudem",
					"Kothapeta",
					"Kovvur",
					"Kurnool",
					"Kyathampalle",
					"Macherla",
					"Machilipatnam",
					"Madanapalle",
					"Mahbubnagar",
					"Mancherial",
					"Mandamarri",
					"Mandapeta",
					"Mangalagiri",
					"Manuguru",
					"Markapur",
					"Medak",
					"Miryalaguda",
					"Mogalthur",
					"Nagari",
					"Nagarkurnool",
					"Nandyal",
					"Narasapur",
					"Narasaraopet",
					"Narayanpet",
					"Narsipatnam",
					"Nellore",
					"Nidadavole",
					"Nirmal",
					"Nizamabad",
					"Nuzvid",
					"Ongole",
					"Palacole",
					"Palasa Kasibugga",
					"Pondur",
					"Palwancha",
					"Parvathipuram",
					"Pedana",
					"Peddapuram",
					"Penuganchiprolu",
					"Pithapuram",
					"Ponnur",
					"Proddatur",
					"Punganur",
					"Puttur",
					"Rajahmundry",
					"Rajam",
					"Rajampet",
					"Ramachandrapuram",
					"Ramagundam",
					"Rayachoti",
					"Rayadurg",
					"Renigunta",
					"Repalle",
					"Sadasivpet",
					"Salur",
					"Samalkot",
					"Sangareddy",
					"Sattenapalle",
					"Siddipet",
					"Singapur",
					"Sircilla",
					"Srikakulam",
					"Srikalahasti",
					"Srisailam Project (Right Flank Colony) Township",
					"Suryapet",
					"Tadepalligudem",
					"Tadpatri",
					"Tandur",
					"Tanuku",
					"Tenali",
					"Tirupati",
					"Tiruvuru",
					"Tuni",
					"Uravakonda",
					"Venkatagiri",
					"Vicarabad",
					"Vijayawada",
					"Vinukonda",
					"Visakhapatnam",
					"Vizianagaram",
					"Wanaparthy",
					"Warangal",
					"Yellandu",
					"Yemmiganur",
					"Yerraguntla",
					"Along",
					"Bomdila",
					"Itanagar",
					"Naharlagun",
					"Pasighat"]
	},
	{
		"name" : "Assam",
		"cities" : ["Abhayapuri",
					"Amguri",
					"Anandnagaar",
					"Barpeta",
					"Barpeta Road",
					"Bilasipara",
					"Bongaigaon",
					"Dhekiajuli",
					"Dhubri",
					"Dibrugarh",
					"Digboi",
					"Diphu",
					"Dispur*",
					"Duliajan Oil Town",
					"Gauripur",
					"Goalpara",
					"Golaghat",
					"Guwahati",
					"Haflong",
					"Hailakandi",
					"Hojai",
					"Jorhat",
					"Karimganj",
					"Kokrajhar",
					"Lanka",
					"Lumding",
					"Mangaldoi",
					"Mankachar",
					"Margherita",
					"Mariani",
					"Marigaon",
					"Nagaon",
					"Nalbari",
					"North Lakhimpur",
					"Rangia",
					"Sibsagar",
					"Silapathar",
					"Silchar",
					"Tezpur"]
	},
	{
		"name" : "Bihar",
		"cities" : ["Amarpur",
					"Araria",
					"Areraj",
					"Arrah",
					"Arwal",
					"Asarganj",
					"Aurangabad",
					"Bagaha",
					"Bahadurganj",
					"Bairgania",
					"Bakhtiarpur",
					"Banka",
					"Banmankhi Bazar",
					"Barahiya",
					"Barauli",
					"Barbigha",
					"Barh",
					"Begusarai",
					"Behea",
					"Bettiah",
					"Bhabua",
					"Bhagalpur",
					"Bihar Sharif",
					"Bikramganj",
					"Bodh Gaya",
					"Buxar",
					"Chanpatia",
					"Chhapra",
					"Colgong",
					"Chandan Bara",
					"Dalsinghsarai",
					"Darbhanga",
					"Daudnagar",
					"Dehri-on-Sone",
					"Dighwara",
					"Dumraon",
					"Fatwah",
					"Forbesganj",
					"Gaya",
					"Gogri Jamalpur",
					"Gopalganj",
					"Hajipursscsc",
					"Hilsa",
					"Hisua",
					"Islampur",
					"Jagdispur",
					"Jamalpur",
					"Jamui",
					"Jehanabad",
					"Jhajha",
					"Jhanjharpur",
					"Jogabani",
					"Kanti",
					"Katihar",
					"Khagaria",
					"Kharagpur",
					"Kishanganj",
					"Lakhisarai",
					"Lalganj",
					"Madhepura",
					"Madhubani",
					"Maharajganj",
					"Mahnar Bazar",
					"Makhdumpur",
					"Maner",
					"Manihari",
					"Marhaura",
					"Masaurhi",
					"Mirganj",
					"Mohania",
					"Mokama",
					"Mokameh",
					"Motihari",
					"Motipur",
					"Munger",
					"Murliganj",
					"Muzaffarpur",
					"Nalanda",
					"Narkatiaganj",
					"Naugachhia",
					"Nawada",
					"Nokha",
					"Patna*",
					"Piro",
					"Purnia",
					"Rafiganj",
					"Rajgir",
					"Ramnagar",
					"Raxaul Bazar",
					"Revelganj",
					"Rosera",
					"Saharsa",
					"Samastipur",
					"Sasaram",
					"Sheikhpura",
					"Sheohar",
					"Sherghati",
					"Silao",
					"Sitamarhi",
					"Siwan",
					"Sonepur",
					"Sugauli",
					"Sultanganj",
					"Supaul",
					"Warisaliganj"]
	},
	{
		"name" : "Chandigarh",
		"cities" : ["Chandigarh"]
	},
	{
		"name" : "Chhattisgarh",
		"cities" : ["Akaltara",
					"Ambagarh Chowki",
					"Ambikapur",
					"Arang",
					"Bade Bacheli",
					"Balod",
					"Baloda Bazar",
					"Basna",
					"Bemetra",
					"Bhatapara",
					"Bhilai",
					"Bilaspur",
					"Birgaon",
					"Champa",
					"Chirmiri",
					"Dalli-Rajhara",
					"Dhamtari",
					"Dipka",
					"Dongargarh",
					"Durg-Bhilai Nagar",
					"Gobranawapara",
					"Jagdalpur",
					"Janjgir",
					"Jashpurnagar",
					"Kanker",
					"Kawardha",
					"Kondagaon",
					"Korba",
					"Mahasamund",
					"Mahendragarh",
					"Mungeli",
					"Naila Janjgir",
					"Nawagarh",
					"Raigarh",
					"Raipur*",
					"Rajnandgaon",
					"Sakti",
					"Tilda Newra"]
	},
	{
		"name" : "Dadra and Nagar Haveli",
		"cities" : ["Amli","Silvassa"]
	},
	{
		"name" : "Daman and Diu",
		"cities" : ["Daman and Diu"]
	},
	{
		"name" : "Delhi",
		"cities" : ["Asola",
					"Bhajanpura",
					"Delhi",
					"New Delhi"]
	},
	{
		"name" : "Goa",
		"cities" : ["Curchorem Cacora",
					"Goa Velha",
					"Margao",
					"Mapusa",
					"Margao",
					"Marmagao",
					"Panaji"]
	},
	{
		"name" : "Gujrat",
		"cities" : ["Adalaj",
					"Adityana",
					"Ahmedabad",
					"Alang",
					"Ambaji",
					"Ambaliyasan",
					"Amreli",
					"Anand",
					"Andada",
					"Anjar",
					"Anklav",
					"Ankleshwar",
					"Antaliya",
					"Arambhada",
					"Atul",
					"Bharuch",
					"Bhavnagar",
					"Bhuj",
					"Cambay",
					"Dahod",
					"Deesa",
					"Dehgam",
					"Dharampur",
					"Dholka",
					"Dwarka",
					"Gandhidham",
					"Gandhinagar*",
					"Godhra",
					"Himatnagar",
					"Idar",
					"Jamnagar",
					"Junagadh",
					"Kadi",
					"Kalavad",
					"Kalol",
					"Kapadvanj",
					"Karjan",
					"Keshod",
					"Khambhalia",
					"Khambhat",
					"Kheda",
					"Khedbrahma",
					"Kheralu",
					"Kodinar",
					"Lathi",
					"Limbdi",
					"Lunawada",
					"Mahesana",
					"Mahuva",
					"Manavadar",
					"Mandvi",
					"Mangrol",
					"Mansa",
					"Mehmedabad",
					"Mithapur",
					"Modasa",
					"Morvi",
					"Nadiad",
					"Navsari",
					"Padra",
					"Palanpur",
					"Palitana",
					"Pardi",
					"Patan",
					"Petlad",
					"Porbandar",
					"Radhanpur",
					"Rajkot",
					"Rajpipla",
					"Rajula",
					"Ranavav",
					"Rapar",
					"Salaya",
					"Sanand",
					"Savarkundla",
					"Sidhpur",
					"Sihor",
					"Songadh",
					"Surat",
					"Talaja",
					"Thangadh",
					"Tharad",
					"Umbergaon",
					"Umreth",
					"Una",
					"Unjha",
					"Upleta",
					"Vadnagar",
					"Vadodara",
					"Valsad",
					"Vapi",
					"Vapi",
					"Veraval",
					"Vijapur",
					"Viramgam",
					"Visnagar",
					"Vyara",
					"Wadhwan",
					"Wankaner"]
	},
	{
		"name" : "Haryana",
		"cities" : ["Asankhurd",
					"Assandh",
					"Ateli",
					"Babiyal",
					"Bahadurgarh",
					"Ballabhgarh",
					"Barwala",
					"Bawal",
					"Bhiwani",
					"Charkhi Dadri",
					"Cheeka",
					"Ellenabad",
					"Faridabad",
					"Fatehabad",
					"Ganaur",
					"Gharaunda",
					"Gohana",
					"Gurgaon",
					"Hansi",
					"Hisar",
					"Hodal",
					"Jagadhri",
					"Jhajjar",
					"Jind",
					"Kaithal",
					"Kalan Wali",
					"Kalka",
					"Karnal",
					"Kurukshetra",
					"Ladwa",
					"Mahendragarh",
					"Mandi Dabwali",
					"Manesar",
					"Narnaul",
					"Narwana",
					"Palwal",
					"Panchkula",
					"Panipat",
					"Pehowa",
					"Pinjore",
					"Rania",
					"Ratia",
					"Rewari",
					"Rohtak",
					"Safidon",
					"Samalkha",
					"Shahbad",
					"Sirsa",
					"Sohna",
					"Sonipat",
					"Taraori",
					"Thanesar",
					"Tohana",
					"Yamunanagar"]
	},
	{
		"name" : "Himachal Pradesh",
		"cities" : ["Arki",
					"Baddi",
					"Bilaspur",
					"Chamba",
					"Dalhousie",
					"Dharamsala",
					"Hamirpur",
					"Keylong",
					"Mandi",
					"Nahan",
					"Shimla",
					"Solan",
					"Sundarnagar"]
	},
	{
		"name" : "Jammu & Kashmir",
		"cities" : ["Katra",
					"Achabbal",
					"Akhnoor",
					"Anantnag",
					"Arnia",
					"Awantipora",
					"Bandipore",
					"Baramula",
					"Jammu",
					"Kathua",
					"Leh",
					"Punch",
					"Rajauri",
					"Sopore",
					"Srinagar",
					"Udhampur"]
	},
	{
		"name" : "Jharkhand",
		"cities" : ["Amlabad",
					"Ara",
					"Barughutu",
					"Bokaro Steel City",
					"Chaibasa",
					"Chakradharpur",
					"Chandil",
					"Chandrapura",
					"Chatra",
					"Chirkunda",
					"Churi",
					"Daltonganj",
					"Deoghar",
					"Dhanbad",
					"Dumka",
					"Garhwa",
					"Ghatshila",
					"Giridih",
					"Godda",
					"Gomoh",
					"Gumia",
					"Gumla",
					"Hazaribag",
					"Hussainabad",
					"Jamshedpur",
					"Jamtara",
					"Jhumri Tilaiya",
					"Khunti",
					"Lohardaga",
					"Madhupur",
					"Mihijam",
					"Musabani",
					"Pakaur",
					"Patratu",
					"Phusro",
					"Ramngarh",
					"Ranchi*",
					"Sahibganj",
					"Saunda",
					"Simdega",
					"Tenu Dam-cum-Kathhara"]
	},
	{
		"name" : "Karnataka",
		"cities" : ["Pereyaapatna",
					"Adiyara",
					"Afzalpura",
					"Alandha",
					"Aalanavara",
					"Alur",
					"Ambikaanagara",
					"Anekal",
					"Ankola",
					"Annigeri",
					"Arsikere",
					"Arkalgud",
					"Athni",
					"Aurad",
					"Babaleshwar",
					"Bangalore",
					"Basavan Bagevadi",
					"Belgaum",
					"Ballary",
					"Bidar",
					"Bijapur",
					"Chadchan",
					"Chamarajanagara",
					"Chikkodi",
					"Chikkamagalur",
					"Chinthaamani",
					"Chitradurga",
					"Chikkaballapura",
					"Davanagere",
					"Devar Hipparagi",
					"Dharwad",
					"Gadhaga",
					"Gauribidanur",
					"Gokak",
					"Gulbarga",
					"Gundlupet",
					"Haasana",
					"Hosapet",
					"Hubbali",
					"Hukkeri",
					"Indi",
					"Kalburgi",
					"Kaarkala",
					"Karwar",
					"Kolar",
					"Kolhar",
					"Kota",
					"Lakshmishawara",
					"Lingsuguru",
					"Maddhuru",
					"Madhugiri",
					"Madikeri",
					"Maagadi",
					"Mahalingapura",
					"Malavalli",
					"Maaluru",
					"Mandya",
					"Mangalore",
					"Maanvi",
					"Mudalagi",
					"Mudabidri",
					"Muddebihala",
					"Mudhola",
					"Mulabaagilu",
					"Mundaragi",
					"Mysore",
					"Nidagundi",
					"Nanjanagoodu",
					"Nippani",
					"Paavagada",
					"Puthooru",
					"Rabakavi Banahatti",
					"Raayachuru",
					"Raamanagara",
					"Raamadurga",
					"Ranibennur",
					"Robertson Pet",
					"Ron",
					"Sadalaga",
					"Sagara",
					"Sakaleshapura",
					"Sindagi",
					"Sandur",
					"Sankeshwara",
					"Soudaththi-Yellamma",
					"Savanur",
					"Sedam",
					"Shahabad",
					"Shahapura",
					"Shiggaavi",
					"Shikapur",
					"Shivamogga",
					"Surapura",
					"Shree Rangapattana",
					"Sidhalaghatta",
					"Sindhagi",
					"Sindhanooru",
					"Sira",
					"Sirsi",
					"Sheraguppa",
					"Shreenivaasapura",
					"Thaalikote",
					"Tarikere",
					"Tekkalakote",
					"Thergallu",
					"Tikota",
					"Talikota",
					"Thipatooru",
					"Thumakooru",
					"Udupi",
					"Ugar",
					"Vijayapura",
					"Wadi",
					"Yaadhagiri"]
	},
	{
		"name" : "Kerala",
		"cities" : ["Adoor",
					"Akathiyoor",
					"Alappuzha",
					"Ancharakandy",
					"Aroor",
					"Ashtamichira",
					"Attingal",
					"Avinissery",
					"Chalakudy",
					"Changanassery",
					"Chendamangalam",
					"Chengannur",
					"Cherthala",
					"Cheruthazham",
					"Chittur-Thathamangalam",
					"Chockli",
					"Erattupetta",
					"Guruvayoor",
					"Haripad",
					"Irinjalakuda",
					"Idukki",
					"Kadirur",
					"Kalliasseri",
					"Kalpetta",
					"Kanhangad",
					"Kanjikkuzhi",
					"Kannur",
					"Kasaragod",
					"Kayamkulam",
					"Kochi",
					"Kodungallur",
					"Kollam",
					"Koothuparamba",
					"Kothamangalam",
					"Kottayam",
					"Kozhikode",
					"Kunnamkulam",
					"Malappuram",
					"Mattannur",
					"Mavelikkara",
					"Mavoor",
					"Muvattupuzha",
					"Nedumangad",
					"Neyyattinkara",
					"Nilambur",
					"Ottappalam",
					"Palai",
					"Palakkad",
					"Panamattom",
					"Panniyannur",
					"Pappinisseri",
					"Paravoor",
					"Pathanamthitta",
					"Peringathur",
					"Perinthalmanna",
					"Perumbavoor",
					"Ponkunnam",
					"Ponnani",
					"Punalur",
					"Puthuppally",
					"Quilandy",
					"Shoranur",
					"Taliparamba",
					"Thiruvalla",
					"Trivandrum",
					"Thodupuzha",
					"Thrissur",
					"Tirur",
					"Vadakara",
					"Vaikom",
					"Varkala"]
	},
	{
		"name" : "Lakshadweep",
		"cities" : ["Amini","Kavaratti"]
	},
	{
		"name" : "Madhya Pradesh",
		"cities" : ["Ashok Nagar",
					"Badagaon",
					"Balaghat",
					"Barwani",
					"Betul",
					"Bhopal",
					"Burhanpur",
					"Chhatarpur",
					"Chhindwara",
					"Chitrakoot",
					"Dabra",
					"Damoh",
					"Datia",
					"Dewas",
					"Dhar",
					"Fatehabad",
					"Gadarwara",
					"Guna",
					"Gwalior",
					"Harda",
					"Indore",
					"Itarsi",
					"Jabalpur",
					"Jhabua",
					"Kailaras",
					"Katni",
					"Khurai",
					"Kotma",
					"Lahar",
					"Lundi",
					"Maharajpur",
					"Mahidpur",
					"Maihar",
					"Malajkhand",
					"Manasa",
					"Manawar",
					"Mandideep",
					"Mandla",
					"Mandsaur",
					"Mauganj",
					"Mhow Cantonment",
					"Mhowgaon",
					"Morena",
					"Multai",
					"Mundi",
					"Murwara",
					"Nagda",
					"Nainpur",
					"Narsinghgarh",
					"Narsinghgarh",
					"Neemuch",
					"Nepanagar",
					"Niwari",
					"Nowgong",
					"Nowrozabad",
					"Pachore",
					"Pali",
					"Panagar",
					"Pandhurna",
					"Panna",
					"Pasan",
					"Pipariya",
					"Pithampur",
					"Porsa",
					"Prithvipur",
					"Raghogarh-Vijaypur",
					"Rahatgarh",
					"Raisen",
					"Rajgarh",
					"Ratlam",
					"Rau",
					"Rehli",
					"Rewa",
					"Sabalgarh",
					"Sagar",
					"Sanawad",
					"Sarangpur",
					"Sarni",
					"Satna",
					"Sausar",
					"Sehore",
					"Sendhwa",
					"Seoni",
					"Seoni-Malwa",
					"Shahdol",
					"Shajapur",
					"Shamgarh",
					"Sheopur",
					"Shivpuri",
					"Shujalpur",
					"Sidhi",
					"Sihora",
					"Singrauli",
					"Sironj",
					"Sohagpur",
					"Tarana",
					"Tikamgarh",
					"Ujhani",
					"Ujjain",
					"Umaria",
					"Vidisha",
					"Wara Seoni"]
	},
	{
		"name" : "Maharashtra",
		"cities" : ["Achalpur",
					"Ahmednagar",
					"Ahmedpur",
					"Ajra",
					"Akkalkot",
					"Akola",
					"Akot",
					"Alandi",
					"Alibag",
					"Amalner",
					"Ambad",
					"Ambejogai",
					"Ambivali Tarf Wankhal",
					"Amravati",
					"Anjangaon",
					"Arvi",
					"Ashta",
					"Aurangabad",
					"Ausa",
					"Baramati",
					"Bhandara",
					"Bhiwandi",
					"Bhusawal",
					"Chalisgaon",
					"Chandrapur",
					"Chinchani",
					"Chiplun",
					"Daund",
					"Devgarh",
					"Dhule",
					"Dombivli",
					"Durgapur",
					"Gadchiroli",
					"Ghatanji",
					"Gondiya",
					"Ichalkaranji",
					"Jalna",
					"Jalgaon",
					"Junnar",
					"Kalyan",
					"Kamthi",
					"Karad",
					"karjat",
					"Kolhapur",
					"Latur",
					"Loha",
					"Lonar",
					"Lonavla",
					"Mahabaleswar",
					"Mahad",
					"Mahuli",
					"Malegaon",
					"Malkapur",
					"Manchar",
					"Mangalvedhe",
					"Mangrulpir",
					"Manjlegaon",
					"Manmad",
					"Manwath",
					"Mehkar",
					"Mhaswad",
					"Mira-Bhayandar",
					"Miraj",
					"Morshi",
					"Mukhed",
					"Mul",
					"Mumbai",
					"Murtijapur",
					"Nagpur",
					"Nalasopara",
					"Nanded-Waghala",
					"Nandgaon",
					"Nandura",
					"Nandurbar",
					"Narkhed",
					"Nashik",
					"Navi Mumbai",
					"Nawapur",
					"Nilanga",
					"Osmanabad",
					"Ozar",
					"Pachora",
					"Paithan",
					"Palghar",
					"Pandharkaoda",
					"Pandharpur",
					"Panvel",
					"Parbhani",
					"Parli",
					"Parola",
					"Partur",
					"Pathardi",
					"Pathri",
					"Patur",
					"Pauni",
					"Pen",
					"Phaltan",
					"Pulgaon",
					"Pune",
					"Purna",
					"Pusad",
					"Raichuri",
					"Rajura",
					"Ramtek",
					"Ratnagiri",
					"Raver",
					"Risod",
					"Sailu",
					"Sangamner",
					"Sangli",
					"Sangole",
					"Sasvad",
					"Satana",
					"Satara",
					"Savner",
					"Sawantwadi",
					"Shahade",
					"Shegaon",
					"Shendurjana",
					"Shirdi",
					"Shirpur-Warwade",
					"Shirur",
					"Shrigonda",
					"Shrirampur",
					"Sillod",
					"Sinnar",
					"Solapur",
					"Soyagaon",
					"Talegaon Dabhade",
					"Talode",
					"Tasgaon",
					"Thane",
					"Tirora",
					"Tuljapur",
					"Tumsar",
					"Uchgaon",
					"Udgir",
					"Umarga",
					"Umarkhed",
					"Umred",
					"Uran",
					"Uran Islampur",
					"Vadgaon Kasba",
					"Vaijapur",
					"Vasai",
					"Virar",
					"Vita",
					"Wadgaon Road",
					"Wai",
					"Wani",
					"Wardha",
					"Warora",
					"Warud",
					"Washim",
					"Yavatmal",
					"Yawal",
					"Yevla"]
	},

];