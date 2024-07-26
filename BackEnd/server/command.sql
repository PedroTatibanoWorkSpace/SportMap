--comandos de criação da tabela--

--criação da tabela de usuario--

CREATE TABLE User (
    idUser INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    Email VARCHAR(255) NOT NULL UNIQUE,
    Username VARCHAR(100) NOT NULL,
    PasswordHash VARCHAR(255) NOT NULL,
    LocaisFavoritosIdCoord INT,
    HistoricoUsuario VARCHAR(1000),
    FOREIGN KEY (LocaisFavoritosIdCoord) REFERENCES Coordenadas(IdCoord)
);


--criação da tabela coordenadas--

CREATE TABLE Coordenadas (
    IdCoord INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    Nome VARCHAR(60) NOT NULL,
    Latitude DECIMAL(10, 8) NOT NULL,
    Longitude DECIMAL(11, 8) NOT NULL,
    EsportesPraticados VARCHAR(255),
    user_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
);

--criação da tabela Favoritos--

CREATE TABLE Favorites (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    item_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    endereco VARCHAR(255),
    nome VARCHAR(255),
    esporte VARCHAR(255),
    latitude DECIMAL(10, 8),
    longitude DECIMAL(11, 8),
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
);

--criação da tabela historico--

CREATE TABLE History (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    item_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    endereco VARCHAR(255),
    nome VARCHAR(255),
    esporte VARCHAR(255),
    latitude DECIMAL(10, 8),
    longitude DECIMAL(11, 8),
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
);
