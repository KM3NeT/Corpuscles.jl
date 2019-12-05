var documenterSearchIndex = {"docs":
[{"location":"readme/#","page":"Corpuscles.jl","title":"Corpuscles.jl","text":"(Image: )","category":"page"},{"location":"readme/#","page":"Corpuscles.jl","title":"Corpuscles.jl","text":"(Image: Stable) (Image: Dev) (Image: Build Status) (Image: Codecov)","category":"page"},{"location":"readme/#Corpuscles.jl-1","page":"Corpuscles.jl","title":"Corpuscles.jl","text":"","category":"section"},{"location":"readme/#","page":"Corpuscles.jl","title":"Corpuscles.jl","text":"Corpuscles.jl is a package which gives easy access to particle properties and identification codes summarised and defined by the Particle Data Group (PDG) collaboration. The cleaned CSV versions of these data are provided by courtesy of the Scikit-HEP project and are part of the Particle Python module which inspired us to create a similar package for the Julia Language. Corpusles.jl is by far not as feature complete as Particle, but we add functionality continuously, as needed. Feel free to create an Issue or pull request if you find any bugs or have suggestions to improve.","category":"page"},{"location":"api/#Corpuscles.jl-1","page":"API","title":"Corpuscles.jl","text":"","category":"section"},{"location":"api/#","page":"API","title":"API","text":"A Julia package to get access to the PDG particle data.","category":"page"},{"location":"api/#","page":"API","title":"API","text":"","category":"page"},{"location":"api/#","page":"API","title":"API","text":"Modules = [Corpuscles]","category":"page"},{"location":"api/#Corpuscles.available_catalog_files-Tuple{}","page":"API","title":"Corpuscles.available_catalog_files","text":"available_catalog_files()\n\nFunction to get the available catalog files which are available within the package and returns a list with the absolute filepaths.\n\nExamples\n\njulia> Corpuscles.available_catalog_files()\n[\"/home/foobar/dev/Corpuscles.jl/data/particle2019.csv\"]\n\n\n\n\n\n","category":"method"},{"location":"api/#Corpuscles.find_particles_by_name-Tuple{Union{Regex, AbstractString}}","page":"API","title":"Corpuscles.find_particles_by_name","text":"find_particles_by_name(name::Regex)\n\nFind particles by their name\n\nArguments\n\nname::Union{Regex, AbstractString}: name search term\n\nExamples\n\njulia> Corpuscles.find_particles_by_name(r\"[A-Z]*mma\")\n1-element Array{Particle,1}:\n \nName:    gamma       PDGid:  PDGID(22)  LaTex:  $\\gamma$\n\nStatus:  Common\n\nParameters:\n-----------\nWidth               = 0.0 MeV ± 0.0 MeV\nQ (charge)          = 0//1 e\nIsospin             = 0//1\nMass                = 0.0 MeV ± 0.0 MeV\nP (space parity)    = -1\nC (charge parity)   = -1\n\n\n\n\n\n","category":"method"},{"location":"api/#Corpuscles.use_catalog_file-Tuple{AbstractString}","page":"API","title":"Corpuscles.use_catalog_file","text":"use_catalog_file(filepath::AbstractString)\n\nThis function reads a given catalog file and sets it as reference\n\nArguments\n\nfilepath::AbstractString: filepath to the catalog file\n\nExamples\n\njulia> Corpuscles.use_catalog_file(\"/home/foobar/dev/Corpuscles.jl/data/particle2019.csv\")\n\n\n\n\n\n","category":"method"},{"location":"#Corpuscles.jl-1","page":"Introduction","title":"Corpuscles.jl","text":"","category":"section"},{"location":"#","page":"Introduction","title":"Introduction","text":"A Julia package to get access to the PDG particle data.","category":"page"},{"location":"#Acknowledgements-1","page":"Introduction","title":"Acknowledgements","text":"","category":"section"},{"location":"#","page":"Introduction","title":"Introduction","text":"This project uses data files which are part of the particle Python package, developed by the Scikit-HEP group. Many thanks for the permission!","category":"page"}]
}