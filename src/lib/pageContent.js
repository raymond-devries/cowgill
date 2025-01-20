import SeattleAboutData from '$lib/content/seattle/about.json';
import SeattleContactData from '$lib/content/seattle/contact.json';
import SeattleEventsData from '$lib/content/seattle/events.json';
import SeattleHomeData from '$lib/content/seattle/home.json';
import SeattleMetaData from '$lib/content/seattle/meta.json';

const seattlePageData = {
	ABOUT: SeattleAboutData,
	CONTACT: SeattleContactData,
	EVENTS: SeattleEventsData,
	HOME: SeattleHomeData,
	META: SeattleMetaData
};

export const pageData = {
	SEATTLE: seattlePageData,
	PORTLAND: seattlePageData,
	BOISE: seattlePageData
};
