// ==============================
// POOLS FIXES (classés par intensité peak/RMS + catégorie)
// JUMP = jumpscares / cris / monstres
// ==============================

const SOUNDS = {
  tier1: [
    'https://quentinziofix.github.io/soundHalloween/monster-scream-aggressive.mp3',
    'https://quentinziofix.github.io/soundHalloween/horror_sfx_vol_1/Creaking%20Door/Creaking%20Door%20%283%29.mp3',
    'https://quentinziofix.github.io/soundHalloween/u_5hx6qi66bg-strange-whispers-415245.mp3',
    'https://quentinziofix.github.io/soundHalloween/Wooden%20Foosteps/Wooden%20Foosteps%20%283%29.mp3',
    'https://quentinziofix.github.io/soundHalloween/horror_sfx_vol_1/Creaking%20Door/Creaking%20Door%20%281%29.mp3'
  ],

  tier2: [
    'https://quentinziofix.github.io/soundHalloween/horror_sfx_vol_1/Monster%20Growl/Monster%20Growl%20%283%29.mp3',
    'https://quentinziofix.github.io/soundHalloween/horror_sfx_vol_1/Monster%20Growl/Monster%20Growl%20%288%29.mp3',
    'https://quentinziofix.github.io/soundHalloween/chain-6073.mp3',
    'https://quentinziofix.github.io/soundHalloween/A%20Horror%20Sound%20Pack%20Full%20Version/%28bonuses%21%21%29/FNAF%202%20SFX%20Remakes/FNAF2_Grandfather%20Clock_%28Unfiltered%29.mp3',
    'https://quentinziofix.github.io/soundHalloween/horror_sfx_vol_1/Leaves%20Footsteps/Leaves%20Footsteps%20%282%29.mp3'
  ],

  tier3: [
    'https://quentinziofix.github.io/soundHalloween/horror-scream-high-quality.mp3',
    'https://quentinziofix.github.io/soundHalloween/A%20Horror%20Sound%20Pack%20Full%20Version/Jumpscares/Puppet%20Combo/Jumpscare_Puppet%20Combo_1.wav',
    'https://quentinziofix.github.io/soundHalloween/A%20Horror%20Sound%20Pack%20Full%20Version/Jumpscares/Glitched/Jumpscare_Glitched_1.wav',
    'https://quentinziofix.github.io/soundHalloween/siren-silent-hill.mp3',
    'https://quentinziofix.github.io/soundHalloween/satanic-laugh-460877.mp3'
  ],

  gift1_4: [
    'https://quentinziofix.github.io/soundHalloween/dragon-studio-woman-screaming-sfx-screaming-sound-effect-320169.mp3',
    'https://quentinziofix.github.io/soundHalloween/clock-livingroom-subdued-chimes-blending-with-the-ticking-344188.mp3',
    'https://quentinziofix.github.io/soundHalloween/demon-chant-latin-14489.mp3',
    'https://quentinziofix.github.io/soundHalloween/piano-reverse-4-463617.mp3',
    'https://quentinziofix.github.io/soundHalloween/metal-scrape-103668.mp3',
    'https://quentinziofix.github.io/soundHalloween/water-dripping-364450.mp3',
    'https://quentinziofix.github.io/soundHalloween/horror_sfx_vol_1/Leaves%20Footsteps/Leaves%20Footsteps%20%283%29.mp3',
    'https://quentinziofix.github.io/soundHalloween/horror_sfx_vol_1/Leaves%20Footsteps/Leaves%20Footsteps%20%284%29.mp3',
    'https://quentinziofix.github.io/soundHalloween/breath-stinger1-96164.mp3',
    'https://quentinziofix.github.io/soundHalloween/horror_sfx_vol_1/Leaves%20Footsteps/Leaves%20Footsteps%20%281%29.mp3'
  ],

  gift5_10: [
    'https://quentinziofix.github.io/soundHalloween/rubber-screeching-43895.mp3',
    'https://quentinziofix.github.io/soundHalloween/jusatti890-scream-horror-sfx-490884.mp3',
    'https://quentinziofix.github.io/soundHalloween/A%20Horror%20Sound%20Pack%20Full%20Version/%28bonuses%21%21%29/FNAF%202%20SFX%20Remakes/FNAF2_Grandfather%20Clock_%28Filtered%29.mp3',
    'https://quentinziofix.github.io/soundHalloween/Stairs%20Footsteps/Stair%20Footsteps%20%281%29.mp3',
    'https://quentinziofix.github.io/soundHalloween/long-metal-creak-86230.mp3',
    'https://quentinziofix.github.io/soundHalloween/dont-look-behind-you-103379.mp3',
    'https://quentinziofix.github.io/soundHalloween/creepy-little-girl-singing-lalala-free-sound-fx-audiotrimmer.mp3',
    'https://quentinziofix.github.io/soundHalloween/Mud%20foosteps/Mud%20Footsteps%20%283%29.mp3',
    'https://quentinziofix.github.io/soundHalloween/alex_jauk-ghostly-laughing-147610.mp3',
    'https://quentinziofix.github.io/soundHalloween/A%20Horror%20Sound%20Pack%20Full%20Version/%28bonuses%21%21%29/FNAF%203%20SFX%20Remakes/danger2b_speak.wav'
  ],

  gift11_20: [
    'https://quentinziofix.github.io/soundHalloween/horror-jump-scare-effect-4-250456.mp3',
    'https://quentinziofix.github.io/soundHalloween/A%20Horror%20Sound%20Pack%20Full%20Version/%28bonuses%21%21%29/FNAF%203%20SFX%20Remakes/scream3.wav',
    'https://quentinziofix.github.io/soundHalloween/mixkit-gasping-zombie-963.wav',
    'https://quentinziofix.github.io/soundHalloween/heartbeat-tense-377249.mp3',
    'https://quentinziofix.github.io/soundHalloween/astral-creepy-dark-logo-254198.mp3',
    'https://quentinziofix.github.io/soundHalloween/20201020165312-99381a4a-b6e3-4a2b-bfdc-a6d3dfb543ec.mp3',
    'https://quentinziofix.github.io/soundHalloween/universfield-horror-impact-hit-567238.mp3',
    'https://quentinziofix.github.io/soundHalloween/horror_sfx_vol_1/Creaking%20Door/Creaking%20Door%20%287%29.mp3',
    'https://quentinziofix.github.io/soundHalloween/spooky-whisper-410558.mp3',
    'https://quentinziofix.github.io/soundHalloween/dragon-studio-i-see-you-creepy-ghost-whisper-401711.mp3'
  ],

  gift21: [
    'https://quentinziofix.github.io/soundHalloween/horror-scream-high-quality.mp3',
    'https://quentinziofix.github.io/soundHalloween/A%20Horror%20Sound%20Pack%20Full%20Version/Jumpscares/Puppet%20Combo/Jumpscare_Puppet%20Combo_1.wav',
    'https://quentinziofix.github.io/soundHalloween/A%20Horror%20Sound%20Pack%20Full%20Version/Jumpscares/Glitched/Jumpscare_Glitched_1.wav',
    'https://quentinziofix.github.io/soundHalloween/horror-jump-scare-effect-4-250456.mp3',
    'https://quentinziofix.github.io/soundHalloween/A%20Horror%20Sound%20Pack%20Full%20Version/%28bonuses%21%21%29/FNAF%203%20SFX%20Remakes/scream3.wav',
    'https://quentinziofix.github.io/soundHalloween/mixkit-gasping-zombie-963.wav',
    'https://quentinziofix.github.io/soundHalloween/horror_sfx_vol_1/Monster%20Growl/Monster%20Growl%20%2812%29.mp3',
    'https://quentinziofix.github.io/soundHalloween/horror_sfx_vol_1/Monster%20Growl/Monster%20Growl%20%2811%29.mp3',
    'https://quentinziofix.github.io/soundHalloween/horror_sfx_vol_1/Monster%20Growl/Monster%20Growl%20%286%29.mp3',
    'https://quentinziofix.github.io/soundHalloween/A%20Horror%20Sound%20Pack%20Full%20Version/Jumpscares/Otherworldly/Jumpscare_Otherworldly_1.wav',
    'https://quentinziofix.github.io/soundHalloween/man-screaming-00001.mp3',
    'https://quentinziofix.github.io/soundHalloween/A%20Horror%20Sound%20Pack%20Full%20Version/Jumpscares/Machine/Jumpscare_Machine_1.wav',
    'https://quentinziofix.github.io/soundHalloween/horror_sfx_vol_1/Monster%20Growl/Monster%20Growl%20%284%29.mp3',
    'https://quentinziofix.github.io/soundHalloween/woman-screaming-000005_1uBCq1R.mp3',
    'https://quentinziofix.github.io/soundHalloween/A%20Horror%20Sound%20Pack%20Full%20Version/Jumpscares/fnaf/Jumpscare_fnaf_1.wav',
    'https://quentinziofix.github.io/soundHalloween/A%20Horror%20Sound%20Pack%20Full%20Version/Jumpscares/Inhuman/Jumpscare_Inhuman_2.wav',
    'https://quentinziofix.github.io/soundHalloween/horror_sfx_vol_1/Monster%20Growl/Monster%20Growl%20%282%29.mp3',
    'https://quentinziofix.github.io/soundHalloween/horror_sfx_vol_1/Monster%20Growl/Monster%20Growl%20%281%29.mp3',
    'https://quentinziofix.github.io/soundHalloween/horror-jump-scare-effect-4-250459.mp3',
    'https://quentinziofix.github.io/soundHalloween/gasping-sfx-419975.mp3',
    'https://quentinziofix.github.io/soundHalloween/sudden-loud-horror-scream.mp3',
    'https://quentinziofix.github.io/soundHalloween/jusatti890-scream-horror-sfx-490884.mp3',
    'https://quentinziofix.github.io/soundHalloween/rubber-screeching-43895.mp3',
    'https://quentinziofix.github.io/soundHalloween/horror_sfx_vol_1/Monster%20Growl/Monster%20Growl%20%288%29.mp3',
    'https://quentinziofix.github.io/soundHalloween/horror_sfx_vol_1/Monster%20Growl/Monster%20Growl%20%283%29.mp3',
    'https://quentinziofix.github.io/soundHalloween/horror_sfx_vol_1/Monster%20Growl/Monster%20Growl%20%285%29.mp3',
    'https://quentinziofix.github.io/soundHalloween/pathetic-screaming-sound-effect-312867.mp3',
    'https://quentinziofix.github.io/soundHalloween/the-rake-remastered-found.mp3',
    'https://quentinziofix.github.io/soundHalloween/screeching-sound-effect-312866.mp3',
    'https://quentinziofix.github.io/soundHalloween/alesiadavina-lurking-horror-monster-143278.mp3',
    'https://quentinziofix.github.io/soundHalloween/horror_sfx_vol_1/Monster%20Growl/Monster%20Growl%20%2810%29.mp3',
    'https://quentinziofix.github.io/soundHalloween/dragon-studio-woman-screaming-sfx-screaming-sound-effect-320169.mp3',
    'https://quentinziofix.github.io/soundHalloween/monster-scream-aggressive.mp3'
  ]
};

// Durée maximale de l’alerte sonore.
// StreamElements reprend la queue après ce délai.
const ALERT_DURATION_SECONDS = 8;

// ==============================
// VOLUME
// ==============================

const VOLUME_LEVELS = [0.10, 0.35, 0.50, 0.80, 1.00];

function pickVolume(minimum = 0) {
  const allowed = VOLUME_LEVELS.filter(volume => volume >= minimum);
  return allowed[Math.floor(Math.random() * allowed.length)];
}

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function pickGiftSound(giftCount) {
  if (giftCount >= 21) {
    return pickRandom(SOUNDS.gift21);
  }

  if (giftCount >= 11) {
    return pickRandom(SOUNDS.gift11_20);
  }

  if (giftCount >= 5) {
    return pickRandom(SOUNDS.gift5_10);
  }

  return pickRandom(SOUNDS.gift1_4);
}

function pickTierSound(tier) {
  if (tier === '2000') {
    return pickRandom(SOUNDS.tier2);
  }

  if (tier === '3000') {
    return pickRandom(SOUNDS.tier3);
  }

  // 1000 / prime / défaut
  return pickRandom(SOUNDS.tier1);
}

// ==============================
// ÉVÉNEMENTS
// ==============================

window.addEventListener('onEventReceived', (obj) => {
  const listener = obj.detail.listener;
  const event = obj.detail.event;

  if (listener !== 'subscriber-latest') {
    SE_API.resumeQueue();
    return;
  }

  const isGift = event.gifted === true;
  const isBulkGift = event.bulkGifted === true;
  const giftCount = Number(event.amount || 1);

  let sound;
  let minimumVolume = 0;

  if (isGift || isBulkGift) {
    // On ne joue qu’une seule alerte pour le gift global,
    // pas une alerte pour chaque sub reçu individuellement.
    if (!isBulkGift) {
      SE_API.resumeQueue();
      return;
    }

    sound = pickGiftSound(giftCount);

    if (giftCount >= 5) {
      minimumVolume = 0.50;
    }

    if (giftCount >= 21) {
      minimumVolume = 0.80;
    }
  }

  if (!(isGift || isBulkGift)) {
    const tier = String(event.tier);
    sound = pickTierSound(tier);

    if (tier === '2000') {
      minimumVolume = 0.50;
    }

    if (tier === '3000') {
      minimumVolume = 0.80;
    }
  }

  playAlert({
    sound: sound,
    volume: pickVolume(minimumVolume)
  });
});

// ==============================
// LECTURE
// ==============================

const audio = new Audio();

function playAlert(config) {
  const sound = config.sound;
  const volume = config.volume;

  audio.pause();
  audio.src = sound;
  audio.volume = volume;
  audio.currentTime = 0;

  audio.play().catch(function (error) {
    console.warn('Impossible de lire le son :', sound, error);
  });

  setTimeout(function () {
    SE_API.resumeQueue();
  }, ALERT_DURATION_SECONDS * 1000);
}

const unlockButton = document.getElementById('unlock-audio');

if (unlockButton) {
  unlockButton.addEventListener('click', function () {
    const allSounds = [
      ...SOUNDS.tier1,
      ...SOUNDS.tier2,
      ...SOUNDS.tier3,
      ...SOUNDS.gift1_4,
      ...SOUNDS.gift5_10,
      ...SOUNDS.gift11_20,
      ...SOUNDS.gift21
    ];

    playAlert({
      sound: pickRandom(allSounds),
      volume: pickVolume()
    });
  });
}
