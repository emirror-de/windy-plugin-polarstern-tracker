{
  description = "Windy polarstern integration";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs?ref=nixos-unstable";
  };

  outputs = { self, nixpkgs }: {

    devShells.x86_64-linux.default = let pkgs = import nixpkgs {system = "x86_64-linux";}; in pkgs.mkShell {
      name = "windy-polarstern";
      packages = with pkgs; [
        pkg-config
        openssl
        nodePackages_latest.nodejs
        nodePackages_latest.npm
      ];
    };
  };
}
