import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
// PATH TO YOUR JSON FILE
import data_normal from '../assets/json/mid.json';
import data_extended from '../assets/json/mid_extended.json';
import data_showcase from '../assets/json/mid_showcase.json';
import data_commander from '../assets/json/mid_commander.json';
import data_borderless from '../assets/json/mid_borderless.json';
import list from '../assets/json/list.json';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  public cards: any[] = [];
  public listCards: any[] = [];
  public mythics: any[] = [];
  public commons: any[] = [];
  public uncommons: any[] = [];
  public rares: any[] = [];
  public listMythics: any[] = [];
  public listCommons: any[] = [];
  public listUncommons: any[] = [];
  public listRares: any[] = [];
  public pack: any[] = [];
  public foilPack: any[] = [];
  public totalValue: number = 0;
  public resellValue: number = 0;
  public valuableFoilNumber = 0;

  public setPack: any[] = [];
  public setFoilPack: any[] = [];
  public totalSetValue: number = 0;
  public resellSetValue: number = 0;
  public valuableSetFoilNumber = 0;

  public collectorPack: any[] = [];
  public collectorFoilPack: any[] = [];
  public totalCollectorValue: number = 0;
  public resellCollectorValue: number = 0;
  public valuableCollectorFoilNumber = 0;
  public fullArtLands: any[];
  public normals: {
    commons: any[],
    uncommons: any[],
    rares: any[],
    mythics: any[]
  } = {
    commons: [],
    uncommons: [],
    rares: [],
    mythics: []
  }
  public extendeds: {
    rares: any[],
    mythics: any[]
  } = {
    rares: [],
    mythics: []
  }

  public borderless: {
    rares: any[],
    mythics: any[]
  } = {
    rares: [],
    mythics: []
  }

  public extendedCommanders: {
    rares: any[],
    mythics: any[]
  } = {
    rares: [],
    mythics: []
  }

  public altArts: {
    rares: any[],
    mythics: any[]
  } = {
    rares: [],
    mythics: []
  }

  public showcases: {
    commons: any[],
    uncommons: any[],
    rares: any[],
    mythics: any[]
  } = {
    commons: [],
    uncommons: [],
    rares: [],
    mythics: []
  }
  title = 'magicFakeBooster';


  constructor() {

  }

  ngOnInit(): void {
    // const normal_url = 'https://api.scryfall.com/cards/search?order=set&q=e%3Amid&unique=prints';
    // const url = 'https://api.scryfall.com/cards/search?order=set&q=e%3Amid+is%3Aextendedart&unique=prints';

    /*fetch(url)
    .then(response => response.json())
    .then(data => {})
    .catch(error => console.error('Error:', error));*/

      const cards = data_borderless;
      this.pack = []
      this.openCollectorPacks(12000);
      /*for (let index = 0; index < cards.length; index++) {
        const element = cards[index];
        this.pack.push(element);
        this.foilPack.push(element);
      }
      this.pack.sort(function (a, b) {
        return b.prices.eur - a.prices.eur;
      });
      this.foilPack.sort(function (a, b) {
        return b.prices.eur_foil - a.prices.eur_foil;
      });*/
      /* this.cards = data.data;
      this.listCards = list;

      this.mythics = this.cards.filter(card => card.booster === true && card.rarity === 'mythic');
      this.commons = this.cards.filter(card => card.booster === true && card.rarity === 'common' && card.mana_cost !== "");
      this.uncommons = this.cards.filter(card => card.booster === true && card.rarity === 'uncommon');
      this.rares = this.cards.filter(card => card.booster === true && card.rarity === 'rare');

      this.listMythics = this.listCards.filter(card => card.booster === true && card.rarity === 'mythic');
      this.listCommons = this.listCards.filter(card => card.booster === true && card.rarity === 'common' && card.mana_cost !== "");
      this.listUncommons = this.listCards.filter(card => card.booster === true && card.rarity === 'uncommon');
      this.listRares = this.listCards.filter(card => card.booster === true && card.rarity === 'rare');
      //this.openPacks(3600);
    })
    .catch(error => console.error('Error:', error));
    */
    //this.openSetPacks(30000);

  }

  openCollectorPacks(packsNumber: number) {
    this.totalCollectorValue = 0;
    this.resellCollectorValue = 0;
    this.collectorPack = [];
    this.collectorFoilPack = [];
    this.fullArtLands = data_showcase.filter(card => card.mana_cost === "");
    this.normals.commons = data_normal.filter(card => card.booster === true && card.rarity === 'common' && card.mana_cost !== "");
    this.normals.uncommons = data_normal.filter(card => card.booster === true && card.rarity === 'uncommon');
    this.normals.rares = data_normal.filter(card => card.booster === true && card.rarity === 'rare');
    this.normals.mythics = data_normal.filter(card => card.booster === true && card.rarity === 'mythic');

    this.extendeds.rares = data_extended.filter(card => card.rarity === 'rare');
    this.extendeds.mythics = data_extended.filter(card => card.rarity === 'mythic');

    this.extendedCommanders.rares = data_commander.filter(card => card.rarity === 'rare');
    this.extendedCommanders.mythics = data_commander.filter(card => card.rarity === 'mythic');

    this.borderless.rares = data_borderless.filter(card => card.rarity === 'rare');
    this.borderless.mythics = data_borderless.filter(card => card.rarity === 'mythic');

    this.showcases.commons = data_showcase.filter(card => card.rarity === 'common' && card.mana_cost !== "");
    this.showcases.uncommons = data_showcase.filter(card => card.rarity === 'uncommon');
    this.showcases.rares = data_showcase.filter(card => card.rarity === 'rare');
    this.showcases.rares.push(...this.borderless.rares)
    this.showcases.mythics = data_showcase.filter(card => card.rarity === 'mythic');
    // showcase and borderless are drawned on the same sheet
    this.showcases.mythics.push(...this.borderless.mythics)

    this.altArts.rares.push(...this.showcases.rares);
    this.altArts.rares.push(...this.extendeds.rares);
    this.altArts.mythics.push(...this.showcases.mythics);
    this.altArts.mythics.push(...this.extendeds.mythics);
    for (let index = 0; index < packsNumber; index++) {
      this.openCollectorPack();
    }
    this.collectorPack.sort(function (a, b) {
      return b.prices.eur - a.prices.eur;
    });
    this.collectorFoilPack.sort(function (a, b) {
      return b.prices.eur_foil - a.prices.eur_foil;
    });
  }

  openCollectorPack() {
    // first card basic land foil
    this.addToCollectorPackAndValue(this.fullArtLands[this.getRandomIntInclusive(0, 4)], true);
    // 4 common foil cards
    this.addToCollectorPackAndValue(this.normals.commons[this.getRandomIntInclusive(0, this.normals.commons.length - 1)], true);
    this.addToCollectorPackAndValue(this.normals.commons[this.getRandomIntInclusive(0, this.normals.commons.length - 1)], true);
    this.addToCollectorPackAndValue(this.normals.commons[this.getRandomIntInclusive(0, this.normals.commons.length - 1)], true);
    this.addToCollectorPackAndValue(this.normals.commons[this.getRandomIntInclusive(0, this.normals.commons.length - 1)], true);
    // 2 uncommon foil cards
    this.addToCollectorPackAndValue(this.normals.uncommons[this.getRandomIntInclusive(0, this.normals.uncommons.length - 1)], true);
    this.addToCollectorPackAndValue(this.normals.uncommons[this.getRandomIntInclusive(0, this.normals.uncommons.length - 1)], true);
    // 1 rare or mythic foil card
    this.drawNormalMythic();
    // 1 extended art rare or mythic
    let isMythic = this.getRandomIntInclusive(1, 74) <= 10;
    let card;

    if (isMythic) {
      // If the card is a mythic, select a random card from the mythics array
      card = this.extendeds.mythics[this.getRandomIntInclusive(0, this.extendeds.mythics.length - 1)];
    } else {
      // If the card is not a mythic, select a random card from the rares array
      card = this.extendeds.rares[this.getRandomIntInclusive(0, this.extendeds.rares.length - 1)];
    }
    console.log(this.extendeds.mythics);

    this.addToCollectorPackAndValue(card, false);
    // 1 extended commander
    this.drawExtendedCommander();
    // 2 common/uncommon showcase
    this.drawShowcaseCUnc(false)
    this.drawShowcaseCUnc(false)
    // 1 common/uncommon showcase foil
    this.drawShowcaseCUnc(true)
    // 1 rare/mythic showcase
    this.drawShowcaseRM(false);

    // 1 rare/mythic ALL ART FOIL
    this.drawAltArt(true);
    //this.collectorFoilPack.push(this.fullArtLands[this.getRandomIntInclusive(1, 5)-1])
  }

  drawNormalMythic() {
    let isMythic = this.getRandomIntInclusive(1, 74) <= 10;
    let card;

    if (isMythic) {
      // If the card is a mythic, select a random card from the mythics array
      card = this.normals.mythics[this.getRandomIntInclusive(0, this.normals.mythics.length - 1)];
    } else {
      // If the card is not a mythic, select a random card from the rares array
      card = this.normals.rares[this.getRandomIntInclusive(0, this.normals.rares.length - 1)];
    }

    this.addToCollectorPackAndValue(card, true);
  }

  drawShowcaseCUnc(foil: boolean) {
    let isUncommon = this.getRandomIntInclusive(1, 74) <= 10;
    let card;

    if (isUncommon) {
      card = this.showcases.uncommons[this.getRandomIntInclusive(0, this.showcases.uncommons.length - 1)];
    } else {
      card = this.showcases.commons[this.getRandomIntInclusive(0, this.showcases.commons.length - 1)];
    }

    this.addToCollectorPackAndValue(card, foil);
  }

  drawShowcaseRM(foil: boolean) {
    let isMythic = this.getRandomIntInclusive(1, 74) <= 10;
    let card;

    if (isMythic) {
      card = this.showcases.mythics[this.getRandomIntInclusive(0, this.showcases.mythics.length - 1)];
    } else {
      card = this.showcases.rares[this.getRandomIntInclusive(0, this.showcases.rares.length - 1)];
    }

    this.addToCollectorPackAndValue(card, foil);
  }

  drawAltArt(foil: boolean) {
    let isMythic = this.getRandomIntInclusive(1, 74) <= 10;
    let card;

    if (isMythic) {
      card = this.altArts.mythics[this.getRandomIntInclusive(0, this.altArts.mythics.length - 1)];
    } else {
      card = this.altArts.rares[this.getRandomIntInclusive(0, this.altArts.rares.length - 1)];
    }

    this.addToCollectorPackAndValue(card, foil);
  }

  drawExtendedCommander() {
    let isMythic = this.getRandomIntInclusive(1, 74) <= 10;
    let card;

    if (isMythic) {
      card = this.extendedCommanders.mythics[this.getRandomIntInclusive(0, this.extendedCommanders.mythics.length - 1)];
    } else {
      card = this.extendedCommanders.rares[this.getRandomIntInclusive(0, this.extendedCommanders.rares.length - 1)];
    }

    this.addToCollectorPackAndValue(card, false);
  }

  addToCollectorPackAndValue(card: any, foil: boolean) {
    if (foil) {
      let price = +card.prices.eur_foil;
      this.totalCollectorValue += price;
      if (price > 1) {
        this.resellCollectorValue += price;
        this.valuableCollectorFoilNumber ++;
        this.collectorFoilPack.push(card);
      }

    }
    else {
      let price = +card.prices.eur;
      this.totalCollectorValue += price;
      if (price > 1
        ) {
        this.resellCollectorValue += price;
        this.collectorPack.push(card);
      }
    }
  }
  openPacks(packsNumber: number) {
    this.totalValue = 0;
    this.resellValue = 0;
    this.pack = [];
    this.foilPack = [];
    for (let index = 0; index < packsNumber; index++) {
      this.openPack();
    }
    this.pack.sort(function (a, b) {
      return b.prices.eur - a.prices.eur;
    });
    this.foilPack.sort(function (a, b) {
      return b.prices.eur_foil - a.prices.eur_foil;
    });
  }

  openSetPacks(packsNumber: number) {
    this.totalSetValue = 0;
    this.resellSetValue = 0;
    this.setPack = [];
    this.setFoilPack = [];
    for (let index = 0; index < packsNumber; index++) {
      this.openSetPack();
    }
    this.setPack.sort(function (a, b) {
      return b.prices.eur - a.prices.eur;
    });
    this.setFoilPack.sort(function (a, b) {
      return b.prices.eur_foil - a.prices.eur_foil;
    });
  }

  openSetPack() {
    // add a random foil
    let foilChance = this.getRandomIntInclusive(0, 10000);

    if (foilChance < 177) {
      let currentMythic = this.mythics[this.getRandomIntInclusive(0, this.mythics.length - 1)];
      this.addToPackAndValue(currentMythic, true, true);
    }
    else if (foilChance < 1428) {
      let currentRare = this.rares[this.getRandomIntInclusive(0, this.rares.length - 1)];
      this.addToPackAndValue(currentRare, true, true);
    }
    else if (foilChance < 4700) {
      let currentUncommon = this.uncommons[this.getRandomIntInclusive(0, this.uncommons.length - 1)];
      this.addToPackAndValue(currentUncommon, true, true);
    }
    else {
      let currentCommon = this.commons[this.getRandomIntInclusive(0, this.commons.length - 1)];
      this.addToPackAndValue(currentCommon, true, true);
    }
    // the list
    let hasList = this.getRandomIntInclusive(0, 10000) < 2500 ? true : false;
    if (hasList) {
      let chance = this.getRandomIntInclusive(0, 10000);

      if (chance < 177) {
        let currentMythic = this.listMythics[this.getRandomIntInclusive(0, this.listMythics.length - 1)];
        this.addToPackAndValue(currentMythic, false, true);
      }
      else if (chance < 1428) {
        let currentRare = this.listRares[this.getRandomIntInclusive(0, this.listRares.length - 1)];
        this.addToPackAndValue(currentRare, false, true);
      }
      else if (chance < 4700) {
        let currentUncommon = this.listUncommons[this.getRandomIntInclusive(0, this.listUncommons.length - 1)];
        this.addToPackAndValue(currentUncommon, false, true);
      }
      else {
        let currentCommon = this.listCommons[this.getRandomIntInclusive(0, this.listCommons.length - 1)];
        this.addToPackAndValue(currentCommon, false, true);
      }
    }

    // normal rare chance
    this.addRare();

    // fireworks 2cards
    let fireworkChance = this.getRandomIntInclusive(0, 10000);

    if (fireworkChance < 160) {
      this.addRare();
      this.addRare();
    }
    else if (fireworkChance < 590) {
      this.addRare();
      this.addUncommon();
    }
    else if (fireworkChance < 900) {
      this.addUncommon();
      this.addUncommon();
    }
    else if (fireworkChance < 2650) {
      this.addRare();
      this.addCommon();
    }
    else if (fireworkChance < 5000) {
      this.addUncommon();
      this.addCommon();
    }
    else {
      this.addCommon();
      this.addCommon();
    }

    //head turner
    let headTurnerChance = this.getRandomIntInclusive(0, 10000);
    if (headTurnerChance < 4000) {
      this.addUncommon();
    }
    else {
      this.addCommon();
    }

    //starting cards

    let startingCardsChance =  this.getRandomIntInclusive(0, 10000);
    if (startingCardsChance < 200) {
      this.addUncommon();
      this.addUncommon();
      this.addUncommon();
      this.addUncommon();
      this.addUncommon();
      this.addUncommon();
    }
    else if (startingCardsChance < 550) {
      this.addUncommon();
      this.addUncommon();
      this.addUncommon();
      this.addUncommon();
      this.addUncommon();
      this.addCommon();
    }
    else if (startingCardsChance < 1350) {
      this.addUncommon();
      this.addUncommon();
      this.addUncommon();
      this.addUncommon();
      this.addCommon();
      this.addCommon();
    }
    else if (startingCardsChance < 2600) {
      this.addCommon();
      this.addCommon();
      this.addCommon();
      this.addUncommon();
      this.addUncommon();
      this.addUncommon();
    }
    else if (startingCardsChance < 7600) {
      this.addCommon();
      this.addCommon();
      this.addCommon();
      this.addUncommon();
      this.addUncommon();
      this.addCommon();
    }
    else {
      this.addCommon();
      this.addCommon();
      this.addCommon();
      this.addCommon();
      this.addCommon();
      this.addCommon();
    }
  }

  addRare() {
    let isMythic = this.getRandomIntInclusive(0, 10000) < 1351 ? true : false;
    if (isMythic) {
      let currentMythic = this.mythics[this.getRandomIntInclusive(0, this.mythics.length - 1)];
      this.addToPackAndValue(currentMythic, false, true);
    }
    else {
      let currentRare = this.rares[this.getRandomIntInclusive(0, this.rares.length - 1)];
      this.addToPackAndValue(currentRare, false, true);
    }
  }

  addCommon() {
    let currentCommon = this.commons[this.getRandomIntInclusive(0, this.commons.length - 1)];
    this.addToPackAndValue(currentCommon, false, true);
  }

  addUncommon() {
    let currentUncommon = this.uncommons[this.getRandomIntInclusive(0, this.uncommons.length - 1)];
    this.addToPackAndValue(currentUncommon, true, true);
  }




  openPack() {
    //let hasFoil = this.getRandomIntInclusive(0, 10000) < 3333 ? true : false;
    for (let index = 0; index < 9; index++) {
      let currentCommon = this.commons[this.getRandomIntInclusive(0, this.commons.length - 1)];
      this.addToPackAndValue(currentCommon, false, false);
    }
    let hasFoil = true;
    // add a random foil
    if (hasFoil) {
      let chance = this.getRandomIntInclusive(0, 10000);

      if (chance < 177) {
        let currentMythic = this.mythics[this.getRandomIntInclusive(0, this.mythics.length - 1)];
        this.addToPackAndValue(currentMythic, true, false);
      }
      else if (chance < 1428) {
        let currentRare = this.rares[this.getRandomIntInclusive(0, this.rares.length - 1)];
        this.addToPackAndValue(currentRare, true, false);
      }
      else {
        let currentCommon = this.commons[this.getRandomIntInclusive(0, this.commons.length - 1)];
        this.addToPackAndValue(currentCommon, true, false);
      }
    }
    // or add another common
    else {
      let currentCommon = this.commons[this.getRandomIntInclusive(0, this.commons.length - 1)];
      this.addToPackAndValue(currentCommon, false, false);
    }
    for (let index = 0; index < 3; index++) {
      let currentUncommon = this.uncommons[this.getRandomIntInclusive(0, this.uncommons.length - 1)];
      this.addToPackAndValue(currentUncommon, false, false);
    }
    let hasMythic = this.getRandomIntInclusive(0, 10000) < 1351 ? true : false;
    if (hasMythic) {
      let currentMythic = this.mythics[this.getRandomIntInclusive(0, this.mythics.length - 1)];
      this.addToPackAndValue(currentMythic, false, false);
    }
    else {
      let currentRare = this.rares[this.getRandomIntInclusive(0, this.rares.length - 1)];
      this.addToPackAndValue(currentRare, false, false);
    }
  }

  getRandomIntInclusive(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
  }

  addToPackAndValue(card: any, foil: boolean, setPack: boolean) {
    if (setPack) {
      if (foil) {
        let price = +card.prices.eur_foil;
        this.totalSetValue += price;
        if (price > 2) {
          this.resellSetValue += price;
          this.valuableSetFoilNumber ++;
          this.setFoilPack.push(card);
        }
      }
      else {
        let price = +card.prices.eur;
        this.totalSetValue += price;
        if (price > 2) {
          this.resellSetValue += price;
          this.setPack.push(card);
        }
      }
    }
    else {
      if (foil) {
        let price = +card.prices.eur_foil;
        this.totalValue += price;
        if (price > 2 || card.rarity === 'mythic' || card.rarity === 'rare') {
          this.resellValue += price;
          this.valuableFoilNumber ++;
          this.foilPack.push(card);
        }
      }
      else {
        let price = +card.prices.eur;
        this.totalValue += price;
        if (price > 2 || card.rarity === 'mythic' || card.rarity === 'rare') {
          this.resellValue += price;
          this.pack.push(card);
        }
      }
    }
  }

  trackById(index: number, card: any) {
    return card.id; // or item.id
  }

}
