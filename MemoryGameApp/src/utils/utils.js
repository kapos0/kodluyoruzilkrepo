export const generateRandomArray = (length) => {
  const frameworks = [
    "angular2",
    "vue",
    "react",
    "grunt",
    "phantomjs",
    "ember",
    "babel",
    "ionic",
    "gulp",
    "meteor",
    "yeoman",
    "yarn",
    "nodejs",
    "bower",
    "browserify",
  ];

  const randomFrameworks = [];
  for (let i = 0; i < length / 2; i++) {
    randomFrameworks.push(
      frameworks[Math.floor(Math.random() * frameworks.length)]
    );
  }

  const newArray = [];
  const availableElements = [...randomFrameworks];

  for (let i = 0; i < length; i++) {
    if (availableElements.length === 0) {
      // Kullanılabilir eleman kalmadıysa, baştan başla
      availableElements.push(...randomFrameworks);
    }

    // Rastgele bir eleman seç
    const randomIndex = Math.floor(Math.random() * availableElements.length);
    const randomElement = availableElements[randomIndex];

    // Yeni diziye ekle
    newArray.push(randomElement);

    // Seçilen elemanı kullanılanlardan çıkar
    availableElements.splice(randomIndex, 1);
  }

  return newArray.map((item) => ({
    name: item,
    id: Math.random().toString(),
    close: true,
    completed: false,
  }));
};
