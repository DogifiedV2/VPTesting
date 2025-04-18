onEvent("recipes", event => {

    event.custom({
        "type": "botania:terra_plate",
        "ingredients": [
            {
                "item": "botania:terrasteel_ingot"
            },
            {
                "item": "botania:life_essence"
            },
            {
                "item": "botania:elementium_ingot"
            }
        ],
        "mana": 500000,
        "result": {
            "item": "botanicalextramachinery:malachite_ingot"
        }
    }).id('botanicalextramachinery:terra_plate/malachite_ingot')

    event.custom({
        "type": "botania:terra_plate",
        "ingredients": [
            {
                "item": "botanicalextramachinery:malachite_ingot"
            },
            {
                "item": "botania:gaia_ingot"
            },
            {
                "item": "woldsvaults:chromatic_gold_block"
            }
        ],
        "mana": 1000000,
        "result": {
            "item": "botanicalextramachinery:saffron_ingot"
        }
    }).id('botanicalextramachinery:terra_plate/saffron_ingot')

    event.custom({
        "type": "botania:terra_plate",
        "ingredients": [
            {
                "item": "botanicalextramachinery:saffron_ingot"
            },
            {
                "item": "the_vault:wutodic_silver_block"
            },
            {
                "item": "the_vault:wutodic_silver_block"
            },
            {
                "item": "botanicalextramachinery:malachite_ingot_block"
            }
        ],
        "mana": 1500000,
        "result": {
            "item": "botanicalextramachinery:shadow_ingot"
        }
    }).id('botanicalextramachinery:terra_plate/shadow_ingot')

    event.custom({
        "type": "botania:terra_plate",
        "ingredients": [
            {
                "item": "botanicalextramachinery:shadow_ingot"
            },
            {
                "item": "the_vault:chromatic_steel_block"
            },
            {
                "item": "the_vault:gem_pog"
            },
            {
                "item": "botania:gaia_ingot"
            },
            {
                "item": "botanicalextramachinery:saffron_ingot_block"
            }
        ],
        "mana": 2000000,
        "result": {
            "item": "botanicalextramachinery:crimson_ingot"
        }
    }).id('botanicalextramachinery:terra_plate/crimson_ingot')

    event.custom({
        "type": "botania:elven_trade",
        "ingredients": [
            {
                "item": "botanicalextramachinery:malachite_ingot"
            },
            {
                "item": "botania:dragonstone"
            },
            {
                "item": "woldsvaults:compressed_vault_essence"
            }
        ],
        "output": [
            {
                "item": "botanicalextramachinery:malachite_dragonstone"
            }
        ]
    }).id('botanicalextramachinery:elven_trade/malachite_dragonstone')

    event.custom({
        "type": "botania:elven_trade",
        "ingredients": [
            {
                "item": "botanicalextramachinery:saffron_ingot"
            },
            {
                "item": "botanicalextramachinery:malachite_dragonstone"
            },
            {
                "item": "woldsvaults:compressed_vault_essence"
            }
        ],
        "output": [
            {
                "item": "botanicalextramachinery:saffron_dragonstone"
            }
        ]
    }).id('botanicalextramachinery:elven_trade/saffron_dragonstone')

    event.custom({
        "type": "botania:elven_trade",
        "ingredients": [
            {
                "item": "botanicalextramachinery:shadow_ingot"
            },
            {
                "item": "botanicalextramachinery:saffron_dragonstone"
            },
            {
                "item": "the_vault:perfect_black_opal"
            }
        ],
        "output": [
            {
                "item": "botanicalextramachinery:shadow_dragonstone"
            }
        ]
    }).id('botanicalextramachinery:elven_trade/shadow_dragonstone')

    event.custom({
        "type": "botania:elven_trade",
        "ingredients": [
            {
                "item": "botanicalextramachinery:crimson_ingot"
            },
            {
                "item": "botanicalextramachinery:shadow_dragonstone"
            },
            {
                "item": "the_vault:gem_pog"
            }
        ],
        "output": [
            {
                "item": "botanicalextramachinery:crimson_dragonstone"
            }
        ]
    }).id('botanicalextramachinery:elven_trade/crimson_dragonstone')


    event.shaped(Item.of('botanicalextramachinery:base_mana_pool'),
        [
            'RIR',
            'IPI',
            'BBB'
        ], {
        R: 'the_vault:vault_diamond_block',
        I: 'botanicalextramachinery:malachite_ingot',
        B: 'botanicalextramachinery:malachite_dragonstone_block',
        P: 'botanicalmachinery:mechanical_mana_pool'
    }).id('botanicalextramachinery:base_mana_pool')

    event.shaped(Item.of('botanicalextramachinery:upgraded_mana_pool'),
        [
            'RIR',
            'IPI',
            'BBB'
        ], {
        R: 'the_vault:vault_diamond_block',
        I: 'botanicalextramachinery:saffron_ingot',
        B: 'botanicalextramachinery:saffron_dragonstone_block',
        P: 'botanicalextramachinery:base_mana_pool'
    }).id('botanicalextramachinery:upgraded_mana_pool')

    event.shaped(Item.of('botanicalextramachinery:base_runic_altar'),
        [
            'RIR',
            'IPI',
            'BBB'
        ], {
        R: 'the_vault:vault_diamond_block',
        I: 'botanicalextramachinery:malachite_ingot',
        B: 'botanicalextramachinery:malachite_dragonstone_block',
        P: 'botanicalmachinery:mechanical_runic_altar'
    }).id('botanicalextramachinery:base_runic_altar')

    event.shaped(Item.of('botanicalextramachinery:upgraded_runic_altar'),
        [
            'RIR',
            'IPI',
            'BBB'
        ], {
        R: 'the_vault:vault_diamond_block',
        I: 'botanicalextramachinery:saffron_ingot',
        B: 'botanicalextramachinery:saffron_dragonstone_block',
        P: 'botanicalextramachinery:base_runic_altar'
    }).id('botanicalextramachinery:upgraded_runic_altar')

    event.shaped(Item.of('botanicalextramachinery:base_daisy'),
        [
            'RIR',
            'IPI',
            'BBB'
        ], {
        R: 'the_vault:vault_diamond_block',
        I: 'botanicalextramachinery:malachite_ingot',
        B: 'botanicalextramachinery:malachite_dragonstone_block',
        P: 'botanicalmachinery:mechanical_daisy'
    }).id('botanicalextramachinery:base_daisy')

    event.shaped(Item.of('botanicalextramachinery:upgraded_daisy'),
        [
            'RIR',
            'IPI',
            'BBB'
        ], {
        R: 'the_vault:vault_diamond_block',
        I: 'botanicalextramachinery:saffron_ingot',
        B: 'botanicalextramachinery:saffron_dragonstone_block',
        P: 'botanicalextramachinery:base_daisy'
    }).id('botanicalextramachinery:upgraded_daisy')

    event.shaped(Item.of('botanicalextramachinery:base_apothecary'),
        [
            'RIR',
            'IPI',
            'BBB'
        ], {
        R: 'the_vault:vault_diamond_block',
        I: 'botanicalextramachinery:malachite_ingot',
        B: 'botanicalextramachinery:malachite_dragonstone_block',
        P: 'botanicalmachinery:mechanical_apothecary'
    }).id('botanicalextramachinery:base_apothecary')

    event.shaped(Item.of('botanicalextramachinery:upgraded_apothecary'),
        [
            'RIR',
            'IPI',
            'BBB'
        ], {
        R: 'the_vault:vault_diamond_block',
        I: 'botanicalextramachinery:saffron_ingot',
        B: 'botanicalextramachinery:saffron_dragonstone_block',
        P: 'botanicalextramachinery:base_apothecary'
    }).id('botanicalextramachinery:upgraded_apothecary')

    event.shaped(Item.of('botanicalextramachinery:base_industrial_agglomeration_factory'),
        [
            'RIR',
            'IPI',
            'BBB'
        ], {
        R: 'the_vault:vault_diamond_block',
        I: 'botanicalextramachinery:malachite_ingot',
        B: 'the_vault:chromatic_steel_block',
        P: 'botanicalmachinery:industrial_agglomeration_factory'
    }).id('botanicalextramachinery:base_industrial_agglomeration_factory')

    event.shaped(Item.of('botanicalextramachinery:upgraded_industrial_agglomeration_factory'),
        [
            'RIR',
            'IPI',
            'BBB'
        ], {
        R: 'the_vault:vault_diamond_block',
        I: 'botanicalextramachinery:saffron_ingot',
        B: 'the_vault:chromatic_steel_block',
        P: 'botanicalextramachinery:base_industrial_agglomeration_factory'
    }).id('botanicalextramachinery:upgraded_industrial_agglomeration_factory')

    event.shaped(Item.of('botanicalextramachinery:advanced_industrial_agglomeration_factory'),
        [
            'RIR',
            'IPI',
            'BBB'
        ], {
        R: 'the_vault:vault_diamond_block',
        I: 'botanicalextramachinery:shadow_ingot',
        B: 'the_vault:black_chromatic_steel_block',
        P: 'botanicalextramachinery:upgraded_industrial_agglomeration_factory'
    }).id('botanicalextramachinery:advanced_industrial_agglomeration_factory')

    event.shaped(Item.of('botanicalextramachinery:ultimate_industrial_agglomeration_factory'),
        [
            'RIR',
            'IPI',
            'BBB'
        ], {
        R: 'the_vault:echo_pog',
        I: 'botanicalextramachinery:crimson_ingot',
        B: 'the_vault:black_chromatic_steel_block',
        P: 'botanicalextramachinery:advanced_industrial_agglomeration_factory'
    }).id('botanicalextramachinery:ultimate_industrial_agglomeration_factory')

    event.shaped(Item.of('botanicalextramachinery:base_alfheim_market'),
        [
            'RIR',
            'IPI',
            'BBB'
        ], {
        R: 'the_vault:vault_diamond_block',
        I: 'botanicalextramachinery:malachite_ingot',
        B: 'botanicalextramachinery:malachite_dragonstone_block',
        P: 'botanicalmachinery:alfheim_market'
    }).id('botanicalextramachinery:base_alfheim_market')

    event.shaped(Item.of('botanicalextramachinery:upgraded_alfheim_market'),
        [
            'RIR',
            'IPI',
            'BBB'
        ], {
        R: 'the_vault:vault_diamond_block',
        I: 'botanicalextramachinery:saffron_ingot',
        B: 'botanicalextramachinery:saffron_dragonstone_block',
        P: 'botanicalextramachinery:base_alfheim_market'
    }).id('botanicalextramachinery:upgraded_alfheim_market')

    event.shaped(Item.of('botanicalextramachinery:base_orechid'),
        [
            'RIR',
            'IPI',
            'BBB'
        ], {
        R: 'woldsvaults:pog_prism',
        I: 'botanicalextramachinery:malachite_ingot',
        B: 'botanicalextramachinery:malachite_dragonstone_block',
        P: 'botania:orechid'
    }).id('botanicalextramachinery:base_orechid')

    event.shaped(Item.of('botanicalextramachinery:upgraded_orechid'),
        [
            'RIR',
            'IPI',
            'BBB'
        ], {
        R: 'woldsvaults:pog_prism',
        I: 'botanicalextramachinery:saffron_ingot',
        B: 'botanicalextramachinery:saffron_dragonstone_block',
        P: 'botanicalextramachinery:base_orechid'
    }).id('botanicalextramachinery:upgraded_orechid')

    event.shaped(Item.of('botanicalextramachinery:advanced_orechid'),
        [
            'RIR',
            'IPI',
            'BBB'
        ], {
        R: 'the_vault:echo_pog',
        I: 'botanicalextramachinery:shadow_ingot',
        B: 'botanicalextramachinery:shadow_dragonstone_block',
        P: 'botanicalextramachinery:upgraded_orechid'
    }).id('botanicalextramachinery:advanced_orechid')

    event.shaped(Item.of('botanicalextramachinery:ultimate_orechid'),
        [
            'RIR',
            'IPI',
            'BBB'
        ], {
        R: 'the_vault:echo_pog',
        I: 'botanicalextramachinery:crimson_ingot',
        B: 'botanicalextramachinery:crimson_dragonstone_block',
        P: 'botanicalextramachinery:advanced_orechid'
    }).id('botanicalextramachinery:ultimate_orechid')

    event.shaped(Item.of('botanicalextramachinery:catalyst_mana_infinity'),
        [
            'BWB',
            'BPB',
            'BBB'
        ], {
        B: 'botanicalextramachinery:crimson_dragonstone_block',
        P: 'botanicalextramachinery:ultimate_mana_pool',
        W: 'woldsvaults:wold_star'
    }).id('botanicalextramachinery:catalyst_mana_infinity')
    
    event.shaped(Item.of('botania:life_essence', 4),
        [
            'MDM',
            'DBD',
            'MDM'
        ], {
        M: 'botania:manasteel_ingot',
        D: 'botania:mana_diamond',
        B: 'the_vault:black_chromatic_steel_ingot'
    }).id('botanicalextramachinery:base_orechid')
    
        event.shaped(Item.of('botania:gaia_ingot'),
        [
            ' X ',
            ' A',
            ' X '
        ], {
        X: 'the_vault:chromatic_steel_ingot',
        A: 'botania:terrasteel_ingot'
    }).id('botania:gaia_ingot')



})