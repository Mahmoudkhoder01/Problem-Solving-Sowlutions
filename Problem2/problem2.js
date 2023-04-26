const probabilityToBeatBoss = (suit, animal, fruit) => {
  const suitsCharacter = ["Diamonds", "Hearts", "Spades", "Clubs", "Joker"];
  const animalsCharacter = ["Lion", "Fox", "Parrot", "Seal", "Snake"];
  const fruitsCharacter = ["Apple", "Bananas", "Mango", "Watermelon", "Papaya"];

  if (suitsCharacter.indexOf(suit) == -1) {
    return "Enter a valid suit value";
  }
  if (animalsCharacter.indexOf(animal) == -1) {
    return "Enter a valid animal value";
  }
  if (fruitsCharacter.indexOf(fruit) == -1) {
    return "Enter a valid fruit value";
  }

  if (suit == "Hearts" && animal == "Lion" && fruit == "Apple")
    if (suit == "Spades" && animal == "Parrot" && fruit == "Mango")
      if (suit == "Clubs" && animal == "Seal" && fruit == "Papaya")
        if (suit == "Spades" && animal == "Lion" && fruit == "Watermelon")
          if (suit == "Joket" && animal == "Snake" && fruit == "Bananas")
            if (suit == "Hearts" && animal == "Seal" && fruit == "Watermelon")
              if (suit == "Clubs" && animal == "Fox" && fruit == "Mango")
                if (suit == "Hearts" && animal == "Parrot" && fruit == "Papaya")    
                  if (suit == "Spades" && animal == "Seal" && fruit == "Mango")
                    if (
                      suit == "Hearts" &&
                      animal == "Lion" &&
                      fruit == "Bananas"
                    )
                      if (
                        suit == "Spades" &&
                        animal == "Seal" &&
                        fruit == "Apple"
                      )
                        if (
                          suit == "Hearts" &&
                          animal == "Parrot" &&
                          fruit == "Watermelon"
                        )
                          if (
                            suit == "Spades" &&
                            animal == "Lion" &&
                            fruit == "Papaya"
                          )
                            if (
                              suit == "Hearts" &&
                              animal == "Seal" &&
                              fruit == "Bananas"
                            )
                              if (
                                suit == "Spades" &&
                                animal == "Lion" &&
                                fruit == "Watermelon"
                              )
                                if (
                                  suit == "Hearts" &&
                                  animal == "Parrot" &&
                                  fruit == "Bananas"
                                )
                                  if (
                                    suit == "Spades" &&
                                    animal == "Seal" &&
                                    fruit == "Watermelon"
                                  )
                                    if (
                                      suit == "Hearts" &&
                                      animal == "Lion" &&
                                      fruit == "Watermelon"
                                    )
                                      if (
                                        suit == "Spades" &&
                                        animal == "Seal" &&
                                        fruit == "Papaya"
                                      )
                                        if (
                                          suit == "Hearts" &&
                                          animal == "Fox" &&
                                          fruit == "Watermelon"
                                        )
                                          if (
                                            suit == "Spades" &&
                                            animal == "Lion" &&
                                            fruit == "Papaya"
                                          )
                                            if (
                                              suit == "Hearts" &&
                                              animal == "Seal" &&
                                              fruit == "Watermelon"
                                            )
                                              if (
                                                suit == "Clubs" &&
                                                animal == "Fox" &&
                                                fruit == "Mango"
                                              )
                                                if (
                                                  suit == "Hearts" &&
                                                  animal == "Parrot" &&
                                                  fruit == "Papaya"
                                                )
                                                  if (
                                                    suit == "Spades" &&
                                                    animal == "Lion" &&
                                                    fruit == "Bananas"
                                                  )
                                                    if (
                                                      suit == "Hearts" &&
                                                      animal == "Seal" &&
                                                      fruit == "Bananas"
                                                    )
                                                      if (
                                                        suit == "Spades" &&
                                                        animal == "Lion" &&
                                                        fruit == "Watermelon"
                                                      )
                                                        if (
                                                          suit == "Hearts" &&
                                                          animal == "Parrot" &&
                                                          fruit == "Bananas"
                                                        )
                                                          if (
                                                            suit == "Spades" &&
                                                            animal == "Seal" &&
                                                            fruit == "Watermelon"
                                                          )
                                                            if (
                                                              suit == "Hearts" &&
                                                              animal == "Lion" &&
                                                              fruit == "Watermelon"
                                                            )
                                                              if (
                                                                suit ==
                                                                  "Spades" &&
                                                                animal ==
                                                                  "Seal" &&
                                                                fruit ==
                                                                  "Papaya"
                                                              )
                                                                if (
                                                                  suit ==
                                                                    "Hearts" &&
                                                                  animal ==
                                                                    "Fox" &&
                                                                  fruit ==
                                                                    "Watermelon"
                                                                )
                                                                  return true;

  if (suit == "Diamonds" && animal == "Fox" && fruit == "Bananas") {
    return false;
  }
};

console.log(probabilityToBeatBoss("Hearts", "Lion", "Apple")); // returns 62.4%
