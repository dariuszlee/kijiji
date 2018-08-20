from json import load
class KijijiGlobal:
    def __init__(self):
        if KijijiGlobal.__singleton is None:
            KijijiGlobal.__singleton = _KijijiGlobals()

    __singleton = None

    def __getattr__(self, attr):
        return(getattr(self.__singleton, attr))

class _KijijiGlobals:
    def __init__(self):
        _KijijiGlobals.__getExtraFields(self)
        _KijijiGlobals.__getCategoriesFlat(self)
        _KijijiGlobals.__getCategoriesLvls(self)

    def __getExtraFields(self):
        print("Getting extra fields")
        with open('./data/failed-data-fields.json', 'r') as f:
            self.ExtraFields = load(f)

    def __getCategoriesFlat(self):
        print("Get flat categories")
        with open('./data/all-categories-flat.json', 'r') as f:
            self.FlatCategories = load(f)

    def __getCategoriesLvls(self):
        print("Get Leveled categories")
        with open('./data/all-categories.json', 'r') as f:
            self.AllCategories = load(f)

if __name__ == "__main__":
    glob1 = KijijiGlobal()
    print(glob1.ExtraFields)
