#!/usr/bin/env python

from setuptools import find_packages, setup

with open("README.md", "r") as fh:
    LONG_DESC = fh.read()
    setup(
        name="fseval",
        version="2.0.3",
        packages=find_packages(include=["fseval", "fseval.*"]),
        entry_points={"console_scripts": ["fseval = fseval.main:main"]},
        long_description=LONG_DESC,
        long_description_content_type="text/markdown",
        license="MIT",
        author="Jeroen Overschie",
        url="https://dunnkers.com/",
        include_package_data=True,
        install_requires=[
            "hydra-core==1.1.0.rc1",
            "hydra-colorlog==1.1.0.dev1",
            "numpy==1.20.2",
            "pandas==1.2.4",
            "scikit-learn==0.24.2",
            "humanfriendly==9.1",
            # callbacks / storage providers / adapter
            "wandb==0.10.31",
            # adapters
            "openml==0.12.1",
            "l2x-synthetic==2.0.0",
            # estimators
            "pytorch-tabnet==3.1.1",
            "skrebate==0.62",
            "xgboost==1.4.2",
            "Boruta==0.3",
            "featboost @ git+https://github.com/dunnkers/FeatBoost.git@support-cloning",
            "stability-selection @ git+https://github.com/dunnkers/stability-selection.git@master",
            "matplotlib==3.4.2",  # required by stability-selection
        ],
        setup_requires=["black==21.4b2", "pytest-runner==5.3.0"],
        tests_require=["pytest==6.2.3"],
    )
