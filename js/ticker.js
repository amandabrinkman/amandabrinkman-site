/* ============================================================
   PRESS TICKER
   Replace or extend TICKER_PUBS to update the ticker.
   ============================================================ */

const TICKER_PUBS = [
  { name: 'The New York Times',    domain: 'nytimes.com'           },
  { name: 'The Washington Post',   domain: 'washingtonpost.com'    },
  { name: 'Forbes',                domain: 'forbes.com'            },
  { name: 'Vice',                  domain: 'vice.com'              },
  { name: 'Teen Vogue',            domain: 'teenvogue.com'         },
  { name: 'Allure',                domain: 'allure.com'            },
  { name: 'Glamour',               domain: 'glamour.com'           },
  { name: 'The Cut',               domain: 'thecut.com'            },
  { name: 'Vogue',                 domain: 'vogue.com'             },
  { name: 'Elle',                  domain: 'elle.com'              },
  { name: 'Fast Company',          domain: 'fastcompany.com'       },
  { name: 'Adweek',                domain: 'adweek.com'            },
  { name: 'Refinery29',            domain: 'refinery29.com'        },
  { name: 'BuzzFeed',              domain: 'buzzfeed.com'          },
  { name: 'Business Insider',      domain: 'businessinsider.com'   },
  { name: 'Time',                  domain: 'time.com'              },
  { name: 'Rolling Stone',         domain: 'rollingstone.com'      },
  { name: 'The Guardian',          domain: 'theguardian.com'       },
  { name: 'BBC',                   domain: 'bbc.com'               },
  { name: 'Cosmopolitan',          domain: 'cosmopolitan.com'      },
  { name: 'Marie Claire',          domain: 'marieclaire.com'       },
  { name: 'HuffPost',              domain: 'huffpost.com'          },
  { name: 'Slate',                 domain: 'slate.com'             },
  { name: 'Vox',                   domain: 'vox.com'               },
  { name: 'New York Magazine',     domain: 'nymag.com'             },
  { name: 'InStyle',               domain: 'instyle.com'           },
  { name: 'People',                domain: 'people.com'            },
  { name: 'Jezebel',               domain: 'jezebel.com'           },
  { name: 'Bustle',                domain: 'bustle.com'            },
  { name: 'Nylon',                 domain: 'nylon.com'             },
  { name: 'Paper Magazine',        domain: 'papermag.com'          },
  { name: 'Bitch Media',           domain: 'bitchmedia.org'        },
  { name: 'Ms. Magazine',          domain: 'msmagazine.com'        },
  { name: 'Out',                   domain: 'out.com'               },
  { name: 'CNN',                   domain: 'cnn.com'               },
  { name: 'NBC News',              domain: 'nbcnews.com'           },
  { name: 'The Atlantic',          domain: 'theatlantic.com'       },
  { name: 'Entertainment Weekly',  domain: 'ew.com'                },
  { name: 'HelloGiggles',          domain: 'hellogiggles.com'      },
  { name: 'POPSUGAR',              domain: 'popsugar.com'          },
];

function buildTickerItem({ name, domain }) {
  const span = document.createElement('span');
  span.className = 't-item';

  const img = document.createElement('img');
  img.className = 't-favicon';
  img.src = `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;
  img.alt = '';
  img.setAttribute('aria-hidden', 'true');
  img.onerror = function () { this.style.display = 'none'; };

  const label = document.createElement('span');
  label.className = 't-name';
  label.textContent = name;

  span.appendChild(img);
  span.appendChild(label);
  return span;
}

(function initTicker() {
  const track = document.querySelector('.ticker-track');
  if (!track) return;

  track.innerHTML = '';
  // Two copies for seamless infinite loop
  [0, 1].forEach(() => {
    TICKER_PUBS.forEach(pub => {
      track.appendChild(buildTickerItem(pub));
    });
  });
})();
