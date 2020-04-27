var documenterSearchIndex = {"docs":
[{"location":"api/#Corpuscles.jl-1","page":"API","title":"Corpuscles.jl","text":"","category":"section"},{"location":"api/#","page":"API","title":"API","text":"A Julia package to get access to the PDG particle data.","category":"page"},{"location":"api/#","page":"API","title":"API","text":"","category":"page"},{"location":"api/#","page":"API","title":"API","text":"Modules = [Corpuscles]","category":"page"},{"location":"api/#Corpuscles.particles-Tuple{}","page":"API","title":"Corpuscles.particles","text":"particles()\n\nReturns the full list of particles from the currently selected catalog.\n\n\n\n\n\n","category":"method"},{"location":"api/#Corpuscles.available_catalog_files-Tuple{}","page":"API","title":"Corpuscles.available_catalog_files","text":"available_catalog_files()\n\nFunction to get the available catalog files which are available within the package and returns a list with the absolute filepaths.\n\nExamples\n\njulia> Corpuscles.available_catalog_files()\n[\"/home/foobar/dev/Corpuscles.jl/data/particle2019.csv\"]\n\n\n\n\n\n","category":"method"},{"location":"api/#Corpuscles.use_catalog_file-Tuple{AbstractString}","page":"API","title":"Corpuscles.use_catalog_file","text":"use_catalog_file(filepath::AbstractString)\n\nThis function reads a given catalog file and sets it as reference\n\nArguments\n\nfilepath::AbstractString: filepath to the catalog file\n\nExamples\n\njulia> Corpuscles.use_catalog_file(\"/home/foobar/dev/Corpuscles.jl/data/particle2019.csv\")\n\n\n\n\n\n","category":"method"},{"location":"acknowledgements/#Acknowledgements-1","page":"Acknowledgements","title":"Acknowledgements","text":"","category":"section"},{"location":"acknowledgements/#","page":"Acknowledgements","title":"Acknowledgements","text":"This project uses data files which are part of the particle Python package, developed by the Scikit-HEP group. Many thanks for the permission!","category":"page"},{"location":"#","page":"Introduction","title":"Introduction","text":"(Image: )","category":"page"},{"location":"#","page":"Introduction","title":"Introduction","text":"(Image: Stable) (Image: Dev) (Image: Build Status) (Image: Codecov)","category":"page"},{"location":"#Corpuscles.jl-1","page":"Introduction","title":"Corpuscles.jl","text":"","category":"section"},{"location":"#","page":"Introduction","title":"Introduction","text":"Corpuscles.jl is a package which gives easy access to particle properties and identification codes summarised and defined by the Particle Data Group (PDG) collaboration. The cleaned CSV versions of these data are provided by courtesy of the Scikit-HEP project and are part of the Particle Python module which inspired us to create a similar package for the Julia Language. Corpusles.jl is by far not as feature complete as Particle, but we add functionality continuously, as needed. Feel free to create an Issue or pull request if you find any bugs or have suggestions to improve.","category":"page"},{"location":"#Usage-1","page":"Introduction","title":"Usage","text":"","category":"section"},{"location":"#","page":"Introduction","title":"Introduction","text":"The Particle struct can be used to create a particle. If an integer value is passed, it will be interpreted as PDG ID, which is the primary particle encoding in Corpuscles.jl:","category":"page"},{"location":"#","page":"Introduction","title":"Introduction","text":"julia> using Corpuscles\n\njulia> p = Particle(12)\nParticle(12) 'nu(e)'","category":"page"},{"location":"#","page":"Introduction","title":"Introduction","text":"To get an overview of the available particle information, use print():","category":"page"},{"location":"#","page":"Introduction","title":"Introduction","text":"julia> print(p)\nName:    K(4)*(2045)\nPDG ID:  -319\nLaTeX:   $\\bar{K}_{4}^{*}(2045)^{0}$\nStatus:  Common\nWidth = 198.0 MeV ± 30.0 MeV\nQ (charge) = 0//1 e\nComposition = Ds\nIsospin = 1//2\nMass = 2045.0 MeV ± 9.0 MeV\nP (space parity) = 1","category":"page"},{"location":"#","page":"Introduction","title":"Introduction","text":"The properties are accessible via attributes:","category":"page"},{"location":"#","page":"Introduction","title":"Introduction","text":"julia> fieldnames(Particle)\n(:pdgid, :mass, :width, :charge, :isospin, :parity, :gparity, :cparity, :antiprop, :rank, :status, :name, :quarks, :latex)\n\njulia> p.quarks\n\"Ds\"\n\njulia> p.isospin\n1//2\n\njulia> p.mass\n2045.0 MeV ± 9.0 MeV","category":"page"},{"location":"#Units-1","page":"Introduction","title":"Units","text":"","category":"section"},{"location":"#","page":"Introduction","title":"Introduction","text":"For some properties like mass and width we use the Unitful package, which makes it easy to combine values with physical units:","category":"page"},{"location":"#","page":"Introduction","title":"Introduction","text":"julia> typeof(p.mass)\nCorpuscles.MeasuredValue{𝐋^2 𝐌 𝐓^-2}\n\njulia> p.mass\n2045.0 MeV ± 9.0 MeV\n\njulia> p.mass.value\n2045.0 MeV\n\njulia> p.mass.lower_limit\n9.0 MeV\n\njulia> p.mass.upper_limit\n9.0 MeV","category":"page"},{"location":"#","page":"Introduction","title":"Introduction","text":"and also Base.isless and Base.isapprox are implemented so that the lower and upper limits are taken into account, as seen here:","category":"page"},{"location":"#","page":"Introduction","title":"Introduction","text":"julia> using Unitful\n\njulia> p.mass\n2045.0 MeV ± 9.0 MeV\n\njulia> p.mass > 2036u\"MeV\"\nfalse\n\njulia> p.mass > 2035u\"MeV\"\ntrue","category":"page"},{"location":"#Particle-Codes-1","page":"Introduction","title":"Particle Codes","text":"","category":"section"},{"location":"#","page":"Introduction","title":"Introduction","text":"Corpuscles currently supports conversions of Pythia and Geant3 codes to PDG using the Pythia and Geant3ID types. The corresponding number is simply passed to the type and then to the Particle itself. The PDG ID will be converted if possible, otherwise an error will be raised.","category":"page"},{"location":"#","page":"Introduction","title":"Introduction","text":"julia> Particle(Geant3ID(5))\nParticle(-13) 'mu'","category":"page"},{"location":"#Finding-Particles-1","page":"Introduction","title":"Finding Particles","text":"","category":"section"},{"location":"#","page":"Introduction","title":"Introduction","text":"The particles() functions returns a Vector containing all the particles of the currently selected catalog. To search for particles, the filter() function comes in hand which can be combined with string comparison functions like startswith() or occursin().","category":"page"},{"location":"#","page":"Introduction","title":"Introduction","text":"Here is an example how to find all particles with names starting with \"nu\":","category":"page"},{"location":"#","page":"Introduction","title":"Introduction","text":"julia> filter(p->startswith(p.name, \"nu\"), particles())\n6-element Array{Particle,1}:\n Particle(-14) 'nu(mu)'\n Particle(-16) 'nu(tau)'\n Particle(-12) 'nu(e)'\n Particle(14) 'nu(mu)'\n Particle(16) 'nu(tau)'\n Particle(12) 'nu(e)'","category":"page"},{"location":"#","page":"Introduction","title":"Introduction","text":"A more powerful way to filter particles based on patterns in their name is using regular expressions with e.g. occursin():","category":"page"},{"location":"#","page":"Introduction","title":"Introduction","text":"julia> filter(p->occursin(r\"D\\(\\d*\\)\", p.name), particles())\n10-element Array{Particle,1}:\n Particle(-10421) 'D(0)*(2300)'\n Particle(-10411) 'D(0)*(2300)'\n Particle(425) 'D(2)*(2460)'\n Particle(10411) 'D(0)*(2300)'\n Particle(10421) 'D(0)*(2300)'\n Particle(10423) 'D(1)(2420)'\n Particle(-425) 'D(2)*(2460)'\n Particle(-10423) 'D(1)(2420)'\n Particle(415) 'D(2)*(2460)'\n Particle(-415) 'D(2)*(2460)'","category":"page"}]
}
