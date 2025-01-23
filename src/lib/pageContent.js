import SeattleAboutData from '$lib/content/seattle/about.json';
import SeattleContactData from '$lib/content/seattle/contact.json';
import SeattleEventsData from '$lib/content/seattle/events.json';
import SeattleHomeData from '$lib/content/seattle/home.json';
import SeattleMetaData from '$lib/content/seattle/meta.json';

import BoiseAboutData from '$lib/content/Boise/about.json';
import BoiseContactData from '$lib/content/Boise/contact.json';
import BoiseEventsData from '$lib/content/Boise/events.json';
import BoiseHomeData from '$lib/content/Boise/home.json';
import BoiseMetaData from '$lib/content/Boise/meta.json';

const seattlePageData = {
	ABOUT: SeattleAboutData,
	CONTACT: SeattleContactData,
	EVENTS: SeattleEventsData,
	HOME: SeattleHomeData,
	META: SeattleMetaData
};

const boisePageData = {
	ABOUT: BoiseAboutData,
	CONTACT: BoiseContactData,
	EVENTS: BoiseEventsData,
	HOME: BoiseHomeData,
	META: BoiseMetaData
};

export const pageData = {
	SEATTLE: seattlePageData,
	PORTLAND: seattlePageData,
	BOISE: boisePageData
};
