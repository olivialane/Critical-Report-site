const array = [
    ["seu", "Cyberfeminist Index", "A collection of thoughts and practices that create an alliance between feminists and technology.", "Seu, M. (2019). Cyberfeminism Index. Available at: https://cyberfeminismindex.com/about/. (Accessed: 10 March 2024)"],
    ["measure-of-man","The Measure Of Man", "A pdf of the original Measure Of Man reference book","Dreyfuss, H. (1960) THE MEASURE OF MAN [Human Factors in Design]. New York: Whitney Library of Design."],
    ["julier", "Credo Entry: Dreyfuss, Henry (1904-72)", "Credo reference entry about Henry Dreyfruss", "‘Dreyfuss, Henry (1904-72)’ (2004) in Julier, G., The Thames & Hudson Dictionary of Design Since 1900. 2nd edn. Thames &amp; Hudson. Available at: https://search.credoreference.com/articles/Qm9va0FydGljbGU6MTk2MjAzMw==?aid=275139 (Accessed: 26 March 2024)."],
    ["ergonomics", "Credo Entry: Ergonomics", "Credo reference entry about Ergonomics", "‘ergonomics’ (2004) in Julier, G., The Thames & Hudson Dictionary of Design Since 1900. 2nd edn. Thames &amp; Hudson. Available at: https://search.credoreference.com/articles/Qm9va0FydGljbGU6MTk2MjA1MQ==?aid=275139 (Accessed: 4 May 2024)."],
    ["buhler", "If the Chair Fits: Sexism in American Office Furniture Design", "Research paper by Jennifer Kaufmann-Buhler, available in the Journal of Design History.", "Jennifer Kaufmann-Buhler, If the Chair Fits: Sexism in American Office Furniture Design, Journal of Design History, Volume 32, Issue 4, November 2019, Pages 376–391, https://doi.org/10.1093/jdh/epz022"],
    ["nhs", "NHS: Repetetive Strain Injury", "Repetitive strain injury (RSI) is a term sometimes used for pain caused by repeated movement of part of the body.", "NHS (2024) Repetitive strain injury (RSI). Available at: https://www.nhs.uk/conditions/repetitive-strain-injury-rsi/ (Accessed: 24 April 2024)."],
    ["puffert", "Credo Entry: Path Dependence", "Credo reference entry about Path Dependence", "https://search.credoreference.com/articles/Qm9va0FydGljbGU6MTgyNDc3Ng==?aid=275139 (Accessed: 28 March 2024)."],
    ["hardesty", "MIT News: Study finds gender skin type bias in Artificial Inteligence systems", "Article doccumenting Joy Buolamwini's findings", "Hardesty, L. (2018) MIT News. Available at: https://news.mit.edu/2018/study-finds-gender-skin-type-bias-artificial-intelligence-systems-0212 (Accessed: 26 March 2024)."],
    ["buolamwini", "Gender Shades: Intersectional Accuracy Disparities in Commercial Gender Classification", "The paper that Buolamwini wrote about her findings on AI bias whilst at MIT", "Buolamwini, J. Gebru, T. (2018) ‘Gender Shades: Intersectional Accuracy Disparities in Commercial Gender Classification’. Available at: chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/https://proceedings.mlr.press/v81/buolamwini18a/buolamwini18a.pdf (Accessed: 1 May 2024)."],
    ["coded-bias", "Coded Bias", "Documentary film investigating biases within artificial intelligence, available on Netflix", "Coded Bias (2020) Directed by Shalini Kantayya. Available at: Netflix (Accessed: April 04 2024)."],
    ["kumagi", "Buddhabot", "This citation references the Buddhabot project, this link directs you to an article about the technology.", "Kumagi, S (2021) 'Buddhabot'. Kyoto University. Unpublished."],
    ["osaki", " 'Hey Buddha': Japan researchers create AI enlightenment tool.", "A link to the article about the technology", "Osaki, T. (2022) 'Hey Buddha': Japan researchers create AI enlightenment tool. Available at: https://phys.org/news/2022-10-hey-buddha-japan-ai-enlightenment.html (Accessed: 17 April 2024)."],
    ["fpp", "Future Philosophical Pills", "Click the link to be taken to the website where you can download these pills", "fuel4design (2023) Future Philosophical Pills. Available at: http://www.fuel4design.org/index.php/future-philosophical-pills-instructions-no-printer/ (Accessed: 17 April 2024)."],
    ["fry", "DeFuturing: Tony Fry", "'defuturing is the negation of world futures, how one has to account for the history and making of the material world—including design—dramatically changes.'", "https://www.designdarktimes.net/home/radical-thinkers-in-design/defuturing"],
    ["kirkpatrick", "Move fast and break things", "The move fast and break things mentality was the mantra of facebook until 2014", "Kirkpatrick, D. (2010) The Facebook Effect. New York, United States: Simon & Schuster."],
    ["lanier", "Jaron Lanier: You Are Not A Gadget", "A manifesto which argues for creativity in digital spaces", "Lanier, J. (2011) You Are Not A Gadget: A Manifesto. London, United Kingdom: Penguin."],
    ["wit", "Women In Tech Survey (2023)", "Recent statistics about the world of technology for women.", "Women In Tech UK (2023) Women in Tech Survey 2023. United Kingdom: Available at: chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/https://www.womenintech.co.uk/wp-content/uploads/2022/12/Women-in-Tech-Survey-2023.pdf (Accessed: 10 April 2024)."],
    ["reinhard", "Archeogaming: Assemblage Theory and Video Games", "A blog post on assemblage theory in gaming", "Reinhard, A. (2017) 'Assemblage Theory and Video Games', Archeogaming, 01/11. Available at: https://archaeogaming.com/2017/11/01/assemblage-theory-and-video-games/ (Accessed: 1 May 2024)."],
    ["delanda", "Assemblage Theory", "Clarifies and systematises the concepts and presuppositions behind the influential new field of assemblage theory", "DeLanda, M. (2016) Assemblage Theory (Paperback). United Kingdom: Edinburgh University Press."],
    ["deleuze", "Assemblage Theory", "Coined by Deleuze and Guattari as a way to consider the body as a multiplicity.", ""],
    ["nail", "What is an Assemblage?", "Journal artticle on Assemblage theory", "Nail, T. (2017). What is an Assemblage? SubStance, 46(1), 21–37. http://www.jstor.org/stable/26451291"],
    ["currier", "Feminist Technological Futures:", " Deluze and body/technology assemblages", "Currier, D. (2003) 'Feminist Technological Futures: Deluze and body/technology assemblages'. Published in Sage, 4 321-338. Available at: https://journals.sagepub.com/doi/epdf/10.1177/14647001030043005 (Accessed: 24 April 2024)."],
    ["forensic", "Forensic Architecture", "", "Forensic Architecture (2024) About. Available at: https://forensic-architecture.org/about/agency (Accessed: 17 April 2024)."],
    ["russel", "Legacy Russel: Glitch Feminism", "A manifesto by Legacy Russel", "Russel, M. (2020) Glitch Feminism: A Manifesto. New York, United States: Verso Books."],
    ["huetal", "Achieving self-congruency?", " Examining why individuals reconstruct their virtual identity in communities of interest established within social network platforms.", "Hu, C., Zhao, L., and Huang, J. (2015). Achieving self-congruency? Examining why individuals reconstruct their virtual identity in communities of interest established within social network platforms. Computers in Human Behavior. 50. Available at:https://www.sciencedirect.com/science/article/pii/S0747563215003143?casa_token=-TwA4_0BBFcAAAAA:MJ_8AN-UIVkOIWsPTwqU1_ciwrrHHwoXXETX8MuaTh8eAqCyJnvqx3qvTIKrzJZ22R7wuWP7Ug"],
    ["bown", "Dream Lovers: The Gamification of Relationships", "", "Bown, A. (2022) Dream Lovers: The Gamification of Relationships (Paperback). United Kingdom: Pluto Press."],
    ["ingenuity", "Ingenuity", "Inventive skill or imagination; cleverness.", "Editors of the American Heritage Dictionaries (ed.) (2016) ‘ingenuity’, in The American Heritage(R) Dictionary of the English Language. 6th edn. Houghton Mifflin. Available at: https://search.credoreference.com/articles/Qm9va0FydGljbGU6NDQyNDAyNg==?aid=275139 (Accessed: 11 April 2024)."],
    ["handmaid", "The Handmaid's Tale: Margaret Atwood", "Futuristic dystopian novel by Canadian author Margaret Atwood published in 1985", "Atwood, M. (1996) The Handmaid’s Tale. Lonon, United Kingdom: Penguin Random House."],
    ["poorthings", "Poor Things", "Poor Things is a 2023 film directed by Yorgos Lanthimos and written by Tony McNamara, based on the 1992 novel by Alasdair Gray.", "Poor Things (2024) Directed by Yorgos Lanthimos [Feature film]. United Kingdom: Walt Disney Studios Motion Pictures International."],
    ["mckie", "The love of all things creepy - how women were the early Goths.", "By A. McKie for The Guardian", "McKie, A. (2014) The love of all things creepy - how women were the early Goths. Available at:https://www.theguardian.com/books/she-said/2014/oct/17/the-love-of-all-things-creepy-how-women-were-the-early-goths(Accessed: 1 May 2024)."],
    ["shelly", "Frankenstein", "Frankenstein tells the story of Victor Frankenstein, a young scientist who creates a sapient creature in an unorthodox scientific experiment...", "Shelly, M. (2012) Frankenstein. London: Penguin."],
    ["radcliffe", "The Mysteries of Udolpho", "The Mysteries of Udolpho is a Romance novel by Ann Radcliffe...", "Radcliffe, A. (1968). The mysteries of Udolpho. 1. London Dent."],
    ["bronte", "Jane Eyre", "Jane Eyre is a novel by the English writer Charlotte Brontë. It was published under her pen name Currer Bell on 19 October 1847...", "Brontë, C. (2008). Jane Eyre. Harlow: Pearson Education."],
    ["millar", "Women as witches: past, present and future", "Dr Charlotte-Rose Millar for The University of Queensland", "small-change.uq.edu.au. (2017). Women as witches: past, present and future. [online] Available at: https://stories.uq.edu.au/shorthand-uq/small-change/women-as-witches/#:~:text=Witches%20were%20often%20believed%20to. (Accessed: 04 May 2024)."],
    ["n_fry", "The Many Faces of Women Who Identify as Witches", "Article about photographer Frances F. Denny who photographs modern witches.", "Fry, N. (2018). The Many Faces of Women Who Identify as Witches. [online] The New Yorker. Available at: https://www.newyorker.com/culture/photo-booth/the-many-faces-of-women-who-identify-as-witches. (Accessed: 04 May 2024)"],
    ["reddit", "r/witchcraft", "r/Witchcraft is a welcoming and inclusive space in which to share knowledge, discuss, ask questions, and further the progression of witchcraft as well as the individual's path. All are welcome, those who practice witchcraft and those who wish to learn.", "reddit. (2011). r/witchcraft. [online] Available at: https://www.reddit.com/r/witchcraft/ (Accessed 22 March. 2023)."],
    ["saville", "Meet London's next gen witches", "TikTok, fashion and hustle culture blur together to create a very 21st century kind of witchcraft", "TimeOut (2022). Meet London’s next gen witches. [online] Time Out London. Available at: https://www.timeout.com/london/things-to-do/meet-londons-next-gen-witches."],
    ["deb", "The Second Sex by Simone De Beauvoir", "The Second Sex (French: Le Deuxième Sexe) is a 1949 book by the French existentialist philosopher Simone de Beauvoir...", "De Beauvoir, S. (1949). The Second Sex. New York: Vintage Books."],
    ["studiovis", "Studio Visit by Theo Triantafyllidis", "Theo Triantafyllidis re-imagines the gallery space as his own virtual studio.", "Triantafyllidis, T. (2018). Studio Visit. [Virtual Reality] Available at: https://slimetech.org/works/studio-visit [Accessed 15 Apr. 2024]."],
    ["white_pube", "The White Pube Podcast", "The White Pube is the collaborative identity of Gabrielle de la Puente and Zarina Muhammad under which we write about art, video games, books, food, life, the weather, whatever’s in our heart(s).", "Muhammad , Z. and de la Puente, G. (2024). The White Pube. [online] The White Pube. Available at: https://thewhitepube.co.uk/about/."],
    ["nat", "Sep 9, 1947 CE: World’s First Computer Bug. ", "", "National Geographic Society (2023) Sep 9, 1947 CE: World’s First Computer Bug. Available at: https://education.nationalgeographic.org/resource/worlds-first-computer-bug/ (Accessed:02 April 2024)."],
    ["xiang", "Mirror, Mirror, on the Wall, Who's the Fairest of Them All?", "Published in Daedalus, 153 250-267.", "Xiang, A. (2024) ‘Mirror, Mirror, on the Wall, Who's the Fairest of Them All?’. Published in Daedalus, 153 250-267. Available at: https://direct.mit.edu/daed/article/153/1/250/119940/Mirror-Mirror-on-the-Wall-Who-s-the-Fairest-of (Accessed: 04 May 2024)."],
    ["perez", "Invisible Women: Data Bias in a World Designed for Men", "Celebrated feminist advocate Caroline Criado Perez investigates the shocking root cause of gender inequality and research", "Criado Perez, C. (2022) Invisible Women: Exposing Data Bias in a World Designed for Men (Paperback). London: Penguin Random House."]
];

let overlay = null; // Variable to store the overlay div

document.addEventListener("DOMContentLoaded", function() {
    // Get all elements with the class name "citation"
    var citations = document.getElementsByClassName("citation");

    // Iterate over each citation element
    for (var i = 0; i < citations.length; i++) {
        // Add event listener for mouseover event
                         
        citations[i].addEventListener("mouseover", function(event) {
            
                                     //find the correct array no
                                     var citationId = this.getAttribute("id");
                                     var arrayNo = findArrayNo(citationId);
                                    
            //If overlay already exists, update its content and position
            if (!overlay) {
                // Create a new div for overlay
                overlay = document.createElement("div");
                title = document.createElement("h2");
                content = document.createElement("p");
                bib = document.createElement("p");

                // Style the overlay
                overlay.style.position = "fixed";
                overlay.style.backgroundColor = "black"; // Semi-transparent white background
                overlay.style.color = "rgba(171,32,253,100)";
                overlay.style.border = "solid 2px rgba(171,32,253,100)"
                overlay.style.padding = "15px";
                overlay.style.maxWidth="20%";
                overlay.style.zIndex = "999"; // Ensure it's on top of other content
                title.classList.add("citation-title");
                content.classList.add("citation-content");
                bib.classList.add("citation-bib");

                // Append the overlay to the body or any other parent element
                document.body.appendChild(overlay);
            }

            // Update overlay content and position
            title.textContent = array[arrayNo][1];
            content.textContent = array[arrayNo][2];
            bib.textContent = array[arrayNo][3];
            overlay.appendChild(title);
            overlay.appendChild(content);
            overlay.appendChild(bib);
            overlay.style.top = event.clientY + 10 + "px"; // Position it relative to mouse Y position
            overlay.style.left = event.clientX + 20 + "px"; // Position it relative to mouse X position
        });

        // Add event listener for mouseout event if needed
        citations[i].addEventListener("mouseout", function() {
            // Remove the overlay on mouseout
            if (overlay) {
                overlay.remove();
                overlay = null; // Reset overlay variable
            }
        });
    }
});

function findArrayNo(e){
    for (i=0; i < array.length; i++){
        if(array[i][0] == e){
            ArrayNo =  i;
            return ArrayNo;
        } 
    }
}
